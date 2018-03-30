import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'IsExternallySharedFieldCustomizerStrings';
import IsExternallyShared, { IIsExternallySharedProps } from './components/IsExternallyShared';


/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IIsExternallySharedFieldCustomizerProperties {
  // This is an example; replace with your own property
}

const LOG_SOURCE: string = 'IsExternallySharedFieldCustomizer';

export default class IsExternallySharedFieldCustomizer
  extends BaseFieldCustomizer<IIsExternallySharedFieldCustomizerProperties> {

    private listId;

  @override
  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
  
    Log.info(LOG_SOURCE, 'Activated IsExternallySharedFieldCustomizer with properties:');
    Log.info(LOG_SOURCE, `The following string should be equal: "IsExternallySharedFieldCustomizer" and "${strings.Title}"`);
    this.listId = this.context.pageContext.list.id;
    return Promise.resolve();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    
    const id = event.listItem.getValueByName('ID');
    Log.info(LOG_SOURCE, `Loaded onRenderCell: ID: ${id}`);
    

    const isExternallyShared: React.ReactElement<{}> =
      React.createElement(IsExternallyShared, 
        { 
          id: id,
          listId: this.listId,
          context: this.context
        } as IIsExternallySharedProps);

    ReactDOM.render(isExternallyShared, event.domElement);
  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    ReactDOM.unmountComponentAtNode(event.domElement);
    super.onDisposeCell(event);
  }
}
