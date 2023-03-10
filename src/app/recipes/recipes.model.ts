export class Recipe {
  public name: String = '';
  public description: String = '';
  public imagePath: string = '';

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
