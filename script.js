document.getElementById('caseStudyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    const fields = ['firstName', 'lastName', 'email', 'phone', 'companyName', 'jobTitle', 'companySize', 'country', 'industry', 'terms'];

    fields.forEach(field => {
        const input = document.getElementById(field);
        if (!input || (input.type !== "checkbox" && input.value.trim() === "")) {
            isValid = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "1px solid #ccc";
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});
