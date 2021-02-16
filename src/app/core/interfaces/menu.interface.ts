export interface IMenu {
  id: string;
  path: string;
  name: string;
  childs?: IMenu[];
}
