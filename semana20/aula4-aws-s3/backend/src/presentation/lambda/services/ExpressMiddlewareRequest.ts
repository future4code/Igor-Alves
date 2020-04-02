export class MiddlewareRequest {
  constructor(private props: MiddlewareRequestProps) {}

  get url(): string {
    return this.props.url;
  }

  get path(): string {
    return this.props.path;
  }

  get body(): any {
    return this.props.body;
  }

  get params(): any {
    return this.props.params;
  }
  set params(newParams: any) {
    this.props.params = newParams;
  }

  get query(): any {
    return this.props.query;
  }

  get headers(): any {
    return this.props.headers;
  }

  get method(): string {
    return this.props.method;
  }

  get files(): any {
    return this.props.files;
  }
}

interface MiddlewareRequestProps {
  url: string;
  path: string;
  body: any;
  params: any;
  headers: any;
  query: any;
  method: string;
  files: any;
}

export const getMiddlewareRequest = (props: MiddlewareRequestProps) => {
  return new MiddlewareRequest(props);
};
