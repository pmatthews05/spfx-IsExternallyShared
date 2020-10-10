import { Log, Guid } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import { SPHttpClient } from '@microsoft/sp-http';
import * as React from 'react';

import styles from './IsExternallyShared.module.scss';
import { FieldCustomizerContext } from '@microsoft/sp-listview-extensibility';
import ExternallySharedIcon from './ExternallySharedIcon';

export interface IIsExternallySharedProps {
  id: number;
  listId: Guid;
  context: FieldCustomizerContext;
}

export interface IIsExternallySharedState {
  externallyShared: number;
}

const LOG_SOURCE: string = 'IsExternallyShared';

export default class IsExternallyShared extends React.Component<IIsExternallySharedProps, IIsExternallySharedState> {

  constructor(props: IIsExternallySharedProps, state: IIsExternallySharedState) {
    super(props, state);
    this.state = {
      externallyShared: 0
    };
  }

  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: IsExternallyShared mounted');

    this._getIfExternallyShared()
      .then(isExternallyShared => {
        this.setState({
          externallyShared: isExternallyShared
        });
      })
      .catch(error => {
        Log.error(LOG_SOURCE, error);
      });
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: IsExternallyShared unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.cell} id={this.props.id.toString()}>
        <ExternallySharedIcon isExternallyShared={this.state.externallyShared} />
      </div>
    );
  }

  private async _getIfExternallyShared(): Promise<number> {
    var response = await this.props.context.spHttpClient.post(`${this.props.context.pageContext.web.absoluteUrl}/_api/web/Lists('${this.props.listId}')/GetItemById('${this.props.id}')/GetSharingInformation/permissionsInformation`, SPHttpClient.configurations.v1, null);

    if (response.status != 200) {
      return 0;
    }

    var jsonReponse = await response.json();
    let returnValue = 2;
    for (let link of jsonReponse.links) {
      if (link.linkDetails.HasExternalGuestInvitees) {
        returnValue = 1;
        break;
      }
    }

    if(returnValue == 2)
    {
      for(let principal of jsonReponse.principals)
      {
        if(principal.principal.isExternal){
          returnValue =1;
          break;
        }
      }
    }

    return returnValue;
  }
}
