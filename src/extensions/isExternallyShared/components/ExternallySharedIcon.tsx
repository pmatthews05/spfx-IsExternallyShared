import * as React from 'react';
import { override } from '@microsoft/decorators';

export interface IExternallySharedIconProps {
    isExternallyShared: number;
}

export default class ExternallySharedIcon extends React.Component<IExternallySharedIconProps, {}>{
    private SHARED_ICON: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAG00AABtNAWneuvsAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAACkUlEQVRoQ9XaO2gVQRTG8ev7VSiKASGi2PgANYJaxE5IYqdiZavYWAk2IgoWgp1YaaxEG0HUSiy1sooGQnyAoDYqgiGg+ADf/08YGMLJvTP7mNn94FeES3ZPcmdnz8xupyEZwCVM4At+4j3u4QiWoJFZhZv428M7HECjsgGvYRVs+YMzaESW4yWsQns5huy5Cqu4EF+xDtmik/+CVVyoy8iWU7CKijGNecgSTY1WUbF2IEuewiooVrZp9RmsgmIdQtLMxWFo/FoFxRpEsuzFY1iFFPEdSdqLbbgPq4gybqPWrMU1/IZVQBk65k5EZQH6sOL/T7NHn1/AN1gnr8JFBEUFn8U41N66A3zELezDHCiLcAJT8E9WtTuYj65RUcfxGdZBfA+h5iqmq3T0OzpPyLT6A+fR8+6r4tVnWAepiobXObhZRMPzKB5hZo/0AVewEUE5Df8AVbuL9Zgty7AFahP64YZoUDZDX5V14rKeYwi15gask5fxCSehYVJrFkMLBauIIjRXX8caJMluWIUU8QRJ+xTlIKxiYr2CmrbkqfIPyLJS2gWroCJ0596DpKn6ItYejma1ZBexolnDKqYMN40uRO2p80b2AsOoPa1uJZSUzdxSKBpevZq5TYiK2lyNX/9glgdQO63p0/q8mzfQedQnWZ/7tB4Jaqf9rIa1oNGiRQuaEbivWP/FxixorMQuKauckmcKXlKWiS5ALerLbuJa1CjqxpskW1HHtoqGUtJoY2sMVjFFJNvY8qMLvrVbi36q2p1OvrnrMgmroFjZttdb/4Cj9Y+Y9JDPv7MXkfUhnzIKq7AQ2R+zKq1/0K3oVYOYLrZRrxq4rIRe9lBxVtHOW+xHY7Md3V630aaDkU7nH6/PvLG2FyRSAAAAAElFTkSuQmCC";
    private LOADING_ICON: string = "data:image/gif;base64,R0lGODlhIAAgAJEDAMbvwFTOQ37acf///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgADACwAAAAAIAAgAAACUpyPqcvtD6Oc1AAhALq5HhEEAgKKnlGOX6h6nHa850y7GCzJS0rxO9sDLnS5W+2ITCopxEiTJJT4FNNIdWOcPJdcWyeW9VSvk3G00tx21+y2owAAIfkECQoAAwAsAAAAACAAIAAAAk6cj6nL7Q+jnNQAIUB9IgSxOd0XNldWpup6alPLjOAkx94s1Qv8Yu4KDAqHJh+Fp9DlbjYSjbkz9lDEagk5wFKUA+4WavBOf1mp9YxOOwoAIfkECQoAAwAsAAAAACAAIAAAAkecj6nL7Q+jnNQAIUB9IgSxOd0XNldWpup6aisygu8Rz0dr5/rOU/j0U9QmQ6FHJikmghFm7/lgOolHWDWkVPowLgsXCg6LCwAh+QQJCgADACwAAAAAIAAgAAACQZyPqcvtD6Oc1AAhQH0iBLE53Rc2V1am6npqKzKC7xHPR2vn+s5TeF4DemS2X++INA6UlKDBWYFCfRiXpYrMarcFACH5BAkKAAMALAAAAAAgACAAAAI7nI+py+0Po5zUACFAfSIEsTndFzZXVqbqemorMoLvEc9Ha+f6zlN4XgN6ZLZf74g0zoI25kyJjEqniAIAIfkECQoAAwAsAAAAACAAIAAAAjecj6nL7Q+jnNQAIUB9IgSxOd0XNldWpup6aisygu8Rz0dr5/rOU3heA3pktl/viEwql8ymM1cAACH5BAkKAAMALAAAAAAgACAAAAIynI+py+0Po5zUACFAfSIEsTndFzZXVqbqemorMoLvEc9Ha+f6zvf+DwwKh8Si8YhUFQAAIfkECQoAAwAsAAAAACAAIAAAAiqcj6nL7Q+jnNQAIUB9IgSxOd0XNldWpurKtu4Lx/JM1/aN5/rO9/4vKwAAIfkEBQoAAwAsAAAAACAAIAAAAiqcj6nL7Q+jnNQBIUB9IgSxOd0XNldWpurKtu4Lx/JM1/aN5/rO9/6vKgAAIfkEBQoAAwAsGAAKAAQABAAAAgeEZBGneFAAACH5BAUKAAMALBgAEgAEAAQAAAIHhGQRp3hQAAAh+QQFCgADACwSABgABAAEAAACB4RkEad4UAAAIfkEBQoAAwAsCgAYAAQABAAAAgeEZBGneFAAACH5BAUKAAMALAQAEgAEAAQAAAIHhGQRp3hQAAAh+QQFCgADACwEAAoABAAEAAACB4RkEad4UAAAOw==";


    @override
    public render(): React.ReactElement<{}> {
        const image = this._getSharedStatus(this.props.isExternallyShared);
        if (image != "") {
            return (
                <img src={image} data-myid={this.props.isExternallyShared} width="17px" />
            );
        }
        else {
            return (<span></span>);
        }
    }

    private _getSharedStatus(value: number): string {
        if (value == 0)
            return this.LOADING_ICON;

        if (value == 1)
            return this.SHARED_ICON;

        if (value == 2)
            return "";
    }
}
