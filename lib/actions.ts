const isInvalidText = (text: string) => {
    if (text.trim() === '') {
        return true;
    }
    return false;
}

const sendContactMessage = (formData: FormData) => {
    const contactMessage = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    
    if (
        isInvalidText((contactMessage.firstName)!.toString()) || 
        isInvalidText((contactMessage.lastName)!.toString()) || 
        isInvalidText((contactMessage.message)!.toString()) || 
        isInvalidText((contactMessage.email)!.toString())
    ) {
        return {
            message: 'Invalid input. Ensure you fill the form correctly.'
        };
    }
    
    // Alert the user on successful submission
    alert(`Your message has been sent successfully:  Name: ${contactMessage.firstName} ${contactMessage.lastName}, Email Address: ${contactMessage.email}, message: ${contactMessage.message}`);

    return {
        message: ''
    };
};

export default sendContactMessage;