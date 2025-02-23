// Job Application Filter
document.getElementById("check").addEventListener("click",function()
{
     const jobAge = parseFloat(document.getElementById("jobAge").value);
     const experience =parseFloat(document.getElementById("experience").value);
     const qualification = document.getElementById("qualification").value;
     const result6 = isEligibleForJob(jobAge, experience, qualification);
     const resultDiv = document.getElementById("result6");
     resultDiv.innerHTML = `<p>You are ${result6} for job</p>`;
     resultDiv.style.display = "block";
});

function isEligibleForJob(age, experience, qualification)
{
    if((age >= 21 && age <= 55) && experience >=2 && (qualification=="Bachelor's Degree" ||qualification=="Masters's Degree"))
    {
        return "Eligible";
    }
    else
    {
        return "Not Eligible"
    }
}