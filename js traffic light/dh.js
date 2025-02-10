function trafficLightControl(density) {
    if (density === "Heavy Traffic") {
        return 60; // Green light for 60 seconds
    } else if (density === "Moderate Traffic") {
        return 40; // Green light for 40 seconds
    } else if (density === "Light Traffic") {
        return 20; // Green light for 20 seconds
    } else {
        return "Invalid traffic density"; // Handles incorrect input
    }
}

// Example usage:
console.log(trafficLightControl("Heavy Traffic"));   // 60
console.log(trafficLightControl("Moderate Traffic")); // 40
console.log(trafficLightControl("Light Traffic"));    // 20
console.log(trafficLightControl("No Traffic"));       // "Invalid traffic density"