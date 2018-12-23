export namespace EosLink {
  export type ActionName = string;
  export type ContractName = string;
  export type AuthActor = string;
  export type AuthPermission = string;

  export interface Auth {
    actor: AuthActor;
    permission: AuthPermission;
  }

  export interface Options {
    eosjs: any;
    defaultContractAccount?: string;
    defaultAuthActor?: string;
    defaultAuthPermission?: string;
  }

  export interface DirectiveOptions {
    name: ActionName;
    actor?: AuthActor;
    permission?: AuthPermission;
  }

  export interface Action {
    name: ActionName;
    account: ContractName;
    authorization: Auth[];
    data: any;
  }
}

export class EosLink {
  constructor({
    eosjs,
    defaultContractAccount,
    defaultAuthActor,
    defaultAuthPermission
  }: EosLink.Options) {}
}
