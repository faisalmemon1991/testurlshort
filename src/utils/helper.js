import { subDomainList } from "./constant";

export const getApps = () => {
    const subdomain = getSubDomain(window.location.hostname);

    const mainApp = subDomainList.find((app) => app.main);
    if (subdomain === "") return mainApp.app;

    const apps = subDomainList.find((app) => subdomain === app.subdomain);

    return apps ? apps.app : mainApp.app;
}

// url.localhost
// url.urlbestshort.com
export const getSubDomain = (location) => {
    const locationParts = location.split(".");
    const isLocalhost = locationParts.slice(-1)[0] === "localhost";

    if (isLocalhost || locationParts.length <= 2) {
        return ""; // No subdomain for localhost or single-word domains
    }

    // Dynamically calculate the slice index
    const sliceTill = locationParts.length - 2; 
    return locationParts.slice(0, sliceTill).join(".");
};
