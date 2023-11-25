// import organization list component
import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
    return(
        <OrganizationList 
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
        /> // render organization list
    );
};
