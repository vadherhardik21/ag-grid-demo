import { Component, OnInit } from '@angular/core';
import { Lookup } from 'src/app/models/Lookup';
import { InspectionIssue } from 'src/app/models/inspection-issue.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public BindInspectionIssue: InspectionIssue[] = [];
  public gridOptions: any;
  public pinnedTopRowData: any[] = [new InspectionIssue()];
  public inspectionText: any[] = [];
  public locationText: any[] = [];
  private BindInspection: Lookup[] = [];
  private BindLocation: Lookup[] = [];

  constructor() {
    this.BindInspectionIssue = [];
    this.GetIssueLookUp();

    setTimeout(() => {
      this.GetIssueDetail();
    }, 1000);

    this.gridOptions = {
      columnDefs: [
        {
          headerName: 'Inspection', field: 'InspectionText',
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: this.inspectionText
          },
          valueFormatter: (params: any) => {
            return params.value ? params.value : 'Select'
          },
          onCellValueChanged: (params: any) => {
            var x = this.BindInspection.find(c => c.LkpText == params.newValue);
            if (x != undefined) {
              params.data.InspectionText = x.LkpText;
              params.data.InspectionId = x.LkpId;
              params.data.LocationBuildingText = '';
              params.data.LocationId = null;
              params.api.refreshCells({ columns: ["InspectionText", "LocationBuildingText"] });
              this.GetIssueLocation(params);
            }
          }
        },
        {
          headerName: 'Location', field: 'LocationBuildingText',
          editable: true,
          cellEditor: 'agSelectCellEditor',
          valueFormatter: (params: any) => {
            return params.value ? params.value : 'Select'
          },
          cellEditorParams: this.getLocationArray.bind(this),
          onCellValueChanged: (params: any) => {
            if (params.newValue != undefined) {
              var x = this.BindLocation.find(c => c.LkpText == params.newValue);
              if (x != undefined) {
                params.data.LocationBuildingText = x.LkpText;
                params.data.LocationId = x.LkpId;
              }
            }
          }
        }
      ],
      pinnedTopRowData: this.pinnedTopRowData,
      getRowClass: (params: any) => {
        if (params.node.rowPinned) {
          return 'bg-body-secondary'; // Set styles for pinned rows
        }
        return '';
      },
      editType: 'fullRow',
      onRowValueChanged: this.RowValueChanged.bind(this),
      stopEditingWhenCellsLoseFocus: true,
    }
  }

  ngOnInit(): void {
  }

  GetIssueDetail() {
    this.BindInspectionIssue =
      [
        {
          "LocationBuildingText": "10 - LOC#1, 3124 Lone Oak Road Valparaiso, IN, 46383",
          "IssueFoundText": "Minor Maintenance Issue",
          "InspectionText": "1 - Order - 05/05/2023",
          "StatusText": "Letter Issued",
          "ResponsiblePartiesText": "Insured",
          "InspectionApprovedByText": "IPG IPG",
          "AssignedUserText": "admin admin",
          "IssueLetterText": "Inspection Underwriter Aproval",
          "IsIssueLetter": true,
          "IsUWReview": true,
          "InspectionId": 10,
          "AdditionalNote": "a asdfasfasdfa dsfasd fdas fadsf dfads fadsf adsf adsf fa dsfadsfdfa dsfdsfasdfadsfasdf das fdas fadsf adsfadsfdsfasdfasdfas ads fasf asd fasdf dasf adsf adsfadsf das fdasf  adsf adsfa asd asfads das fasdf asdf dasf ads fadsf",
          "DueDt": new Date("2023-11-04T02:54:24"),
          "IssueId": 13,
          "LocationId": 6303,
          "StatusId": 6,
          "AssignedBy": 1,
          "ResponsiblePartyId": 3,
          "ApprovedBy": 264,
          "IssueLtrTypeId": 6,
          "IssueFoundId": 6
        },
        {
          "LocationBuildingText": "11 - LOC#1, 3124 Lone Oak Road Valparaiso, IN, 46383",
          "IssueFoundText": "Minor Maintenance Issue",
          "InspectionText": "2 - Order - 05/05/2023",
          "StatusText": "Letter Issued",
          "ResponsiblePartiesText": "Insured",
          "InspectionApprovedByText": "IPG IPG",
          "AssignedUserText": "admin admin",
          "IssueLetterText": "Inspection Underwriter Aproval",
          "IsIssueLetter": true,
          "IsUWReview": true,
          "InspectionId": 11,
          "AdditionalNote": "a asdfasfasdfa dsfasd fdas fadsf dfads fadsf adsf adsf fa dsfadsfdfa dsfdsfasdfadsfasdf das fdas fadsf adsfadsfdsfasdfasdfas ads fasf asd fasdf dasf adsf adsfadsf das fdasf  adsf adsfa asd asfads das fasdf asdf dasf ads fadsf",
          "DueDt": new Date("2023-11-04T02:54:24"),
          "IssueId": 13,
          "LocationId": 6303,
          "StatusId": 6,
          "AssignedBy": 1,
          "ResponsiblePartyId": 3,
          "ApprovedBy": 264,
          "IssueLtrTypeId": 6,
          "IssueFoundId": 6
        },
        {
          "LocationBuildingText": "",
          "IssueFoundText": "Minor Maintenance Issue",
          "InspectionText": "3 - Order - 05/05/2023",
          "StatusText": "Letter Issued",
          "ResponsiblePartiesText": "Insured",
          "InspectionApprovedByText": "IPG IPG",
          "AssignedUserText": "admin admin",
          "IssueLetterText": "Inspection Underwriter Aproval",
          "IsIssueLetter": true,
          "IsUWReview": true,
          "InspectionId": 12,
          "AdditionalNote": "a asdfasfasdfa dsfasd fdas fadsf dfads fadsf adsf adsf fa dsfadsfdfa dsfdsfasdfadsfasdf das fdas fadsf adsfadsfdsfasdfasdfas ads fasf asd fasdf dasf adsf adsfadsf das fdasf  adsf adsfa asd asfads das fasdf asdf dasf ads fadsf",
          "DueDt": new Date("2023-11-04T02:54:24"),
          "IssueId": 13,
          "LocationId": 0,
          "StatusId": 6,
          "AssignedBy": 1,
          "ResponsiblePartyId": 3,
          "ApprovedBy": 264,
          "IssueLtrTypeId": 6,
          "IssueFoundId": 6
        }
      ];

    this.gridOptions.api.setRowData(this.BindInspectionIssue);
  }

  GetIssueLookUp() {
    this.BindInspection = [
      {
        "LkpId": 10,
        "LkpCode": '',
        "LkpText": "1 - Order - 05/05/2023",
        "LkpDesc": '',
        "LkpSortOrder": 0,
        "FlgDefault": false,
        "CmpWebsite": "",
        "InspectionId": 0,
      },
      {
        "LkpId": 11,
        "LkpCode": '',
        "LkpText": "2 - Received - 05/17/2023",
        "LkpDesc": '',
        "LkpSortOrder": 0,
        "FlgDefault": false,
        "CmpWebsite": "",
        "InspectionId": 0,
      },
      {
        "LkpId": 12,
        "LkpCode": '',
        "LkpText": "3 - Received - 10/30/2023",
        "LkpDesc": '',
        "LkpSortOrder": 0,
        "FlgDefault": false,
        "CmpWebsite": "",
        "InspectionId": 0,
      }
    ];

    this.inspectionText.push("Select");
    this.BindInspection.forEach(data => {
      this.inspectionText.push(data.LkpText);
    })
  }

  GetIssueLocation(params: any) {
    this.BindLocation = [
      {
        "LkpId": 6303,
        "LkpCode": "6303#~#0",
        "LkpText": "10 - LOC#1, 3124 Lone Oak Road Valparaiso, IN, 46383",
        "LkpDesc": '',
        "LkpSortOrder": 0,
        "FlgDefault": false,
        "CmpWebsite": "",
        "InspectionId": 10,
      },
      {
        "LkpId": 6304,
        "LkpCode": "6304#~#0",
        "LkpText": "10 - LOC#2, 3125 Lone Oak Road Valparaiso, IN, 46383",
        "LkpDesc": '',
        "LkpSortOrder": 0,
        "FlgDefault": false,
        "CmpWebsite": "",
        "InspectionId": 10,
      },
      {
        "LkpId": 6303,
        "LkpCode": "6303#~#0",
        "LkpText": "11 - LOC#1, 3124 Lone Oak Road Valparaiso, IN, 46383",
        "LkpDesc": '',
        "LkpSortOrder": 0,
        "FlgDefault": false,
        "CmpWebsite": "",
        "InspectionId": 11,
      },
      {
        "LkpId": 6304,
        "LkpCode": "6304#~#0",
        "LkpText": "11 - LOC#2, 3125 Lone Oak Road Valparaiso, IN, 46383",
        "LkpDesc": '',
        "LkpSortOrder": 0,
        "FlgDefault": false,
        "CmpWebsite": "",
        "InspectionId": 11,
      }
    ];

    this.BindLocation = this.BindLocation.filter(x => x.InspectionId == params.data.InspectionId);

    this.locationText = [];

    this.BindLocation.forEach(data => {
      this.locationText.push(data.LkpText);
    })
  }

  private getLocationArray(param: any) {
    return {
      values: this.locationText
    }
  }

  RowValueChanged(event: any) {
    console.log('RowValueChanged - called');
    var data = event.data;
    if (event.rowPinned == 'top') {
      if (data.InspectionText == 'Select' || data.IssueFoundText == 'Select' || data.StatusText == 'Select' || data.AssignedUserText == 'Select'
        || data.ResponsiblePartiesText == 'Select' || data.InspectionApprovedByText == 'Select' || data.IssueLetterText == 'Select'
        || data.LocationBuildingText == 'Select') {
      }
    }

    this.SaveUpdate(event);
  }

  SaveUpdate(event: any) {
    console.log('Save data');
  }
}
