export type PageProps = Record<string, any>;

export type PageRenderer = (props: PageProps) => string;

export type TemplateRenderer = (template: PageRenderer, props?: PageProps) => string;