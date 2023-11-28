export interface Lookup {
  LkpId: number,
  LkpCode: string,
  LkpText: string,
  LkpDesc?: string,
  LkpSortOrder?: number,
  FlgDefault?: boolean,
  CmpWebsite: string,
  InspectionId?: number
}
