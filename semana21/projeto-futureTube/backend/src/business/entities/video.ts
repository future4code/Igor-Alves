export class Video {
  constructor(
    private url: string,
    private thumbnail: string,
    private title: string,
    private description: string
  ) {}

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string): void {
    this.url = url;
  }

  public getThumbnail(): string {
    return this.thumbnail
  }

  public setThumbnail(thumbnail: string): void {
    this.thumbnail = thumbnail;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description
  }

  public setDescription(description: string): void {
    this.description = description;
  } 
}