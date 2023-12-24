export interface DatabaseDriverInterface {
  connect(): any;

  disconnect(): any;

  client(): any;
}
