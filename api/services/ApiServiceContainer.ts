import ApplicationService from "./ApplicationService";
import AuthenticationService from "./AuthenticationService";
import ProfileService from "./ProfileService";

export interface ApiServiceContainer {
    application: ApplicationService;
    authentication: AuthenticationService;
    profile: ProfileService;
}