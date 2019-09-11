export class TransactionModel {
    constructor(
        public transaction_id?:string,
        public user_id?: string,
        public transaction_type?: string, //credit / debit
        public amount?: number,
        public transaction_title?: string,
        public transaction_description?: string,
        public transaction_status?: boolean, //0 deleted / 1 not deleted
        public transaction_created_by?: number,
        public transaction_date_created?: any,
        public transaction_updated_by?: number,
        public transaction_date_updated?: any
    ){}
}