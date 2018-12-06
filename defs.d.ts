declare module "*.css"{
var styles: {[key: string]: string}
export = styles
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.xml" {
  const content: any;
  export default content;
}