import { override } from '@microsoft/decorators';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';


export interface ICustomCssApplicationCustomizerProperties {
  cssurl: string;
}


export default class CustomCssApplicationCustomizer
  extends BaseApplicationCustomizer<ICustomCssApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {

    const cssUrl: string = `${this.context.pageContext.site.absoluteUrl}/Style Library/custom.css`
 
    if (cssUrl) {

        const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
        let customStyle: HTMLLinkElement = document.createElement("link");
        customStyle.href = cssUrl;
        customStyle.rel = "stylesheet";
        customStyle.type = "text/css";
        head.insertAdjacentElement("beforeEnd", customStyle);
    }

    return Promise.resolve();
  }
}
