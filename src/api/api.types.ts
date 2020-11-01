export interface LoginResponse {
  Language: string;
  UserSID: string;
  Credentials: {
    AdminDeviceControl: boolean;
    AdminDoorControl: boolean;
    AdminOperatorChanging: boolean;
    EmployeesReports: boolean;
    EventsReports: boolean;
    HardwareReports: boolean;
    InstallatorDataUploading: boolean;
    InstallatorDeviceChanging: boolean;
    InstallatorDoorChanging: boolean;
    InstallatorVersionControl: boolean;
    ManagementReports: boolean;
    PassOfficeDataUploading: boolean;
    PassOfficeEmployeeControl: boolean;
    PassOfficeIdentifierEnrollment: boolean;
    PassOfficeVisitorControl: boolean;
    PersonnelAccess: boolean;
    PersonnelDataUploading: boolean;
    PersonnelDepartments: boolean;
    PersonnelEmployeeSetting: boolean;
    PersonnelSchedules: boolean;
    PersonnelUnusedIdentifiers: boolean;
    PersonnelVisitorSetting: boolean;
    SecurityDoorControl: boolean;
    SecurityPhotoverification: boolean;
    SecurityViewEvents: boolean;
    SecurityViewPlans: boolean;
    SystemStatusReports: boolean;
    TimeAttendanceReports: boolean;
    VisitorsReports: boolean;
  };
}

export interface Door {
  Token: number;
  Name: string;
  HardwareState: number;
}
export interface GetDoorsListResponse {
  Door: Door[];
}
