export class InspectionIssue {
  LocationBuildingText: string = ''
  IssueFoundText: string = ''
  InspectionText: string = ''
  StatusText: string = ''
  ResponsiblePartiesText: string = ''
  InspectionApprovedByText: string = ''
  AssignedUserText: string = ''
  IssueLetterText: string = ''
  IsUWReview: boolean = false
  IsIssueLetter: boolean = false
  LocationId: number = 0
  IssueFoundId: number = 0
  StatusId: number = 0
  ResponsiblePartyId: number = 0
  ApprovedBy: number = 0
  AssignedBy: number = 0
  IssueLtrTypeId: number = 0
  AdditionalNote: string = ''
  DueDt?: Date
  IssueId: number = 0
  InspectionId: number = 0
}


