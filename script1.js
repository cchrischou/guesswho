// function displayImage() {
//     const imgElement = document.getElementById("displayedImage");

//     //Letter
//     const input1_letter = document.getElementById("charInput1").value.toUpperCase();
//     const input2_letter = document.getElementById("charInput2").value.toUpperCase();

//     //Number
//     const input1_number = input1_letter.charCodeAt(0); //Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII
//     const input2_number = input2_letter.charCodeAt(0); //Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII
    
   

//     // two
//     if(input1_number == 69 && input2_number == 70) { //If input1_number is 67 (E) AND input2_number is 68 (F), then show this image
//         imgElement.src = "./imgs/nyan.avif"
//         imgElement.style.display = "block";
//     }

//     else {
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif";  // Default image when conditions are not met
//         imgElement.style.display = "block";           // Show the default image
//     }
    
// }

// function displayImage() {
//     const imgElement = document.getElementById("displayedImage");

//     // Letter Inputs
//     const input1_letter = document.getElementById("charInput1").value.toUpperCase();
//     const input2_letter = document.getElementById("charInput2").value.toUpperCase();

//     // Convert letters to numbers (ASCII values)
//     const input1_number = input1_letter.charCodeAt(0); // Converts the letter to a number (e.g., 'A' is 65)
//     const input2_number = input2_letter.charCodeAt(0); // Converts the letter to a number (e.g., 'B' is 66)

//     // Check if input1 is 'E' (69) and input2 is 'F' (70), or vice versa
//     if ((input1_number == 69 && input2_number == 70) || (input1_number == 70 && input2_number == 69)) {
//         imgElement.src = "./imgs/nyan.avif";  // Set image source
//         imgElement.style.display = "block";   // Show the image
//     }
//     else {
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif";  // Default image when conditions are not met
//         imgElement.style.display = "block";           // Show the default image
//     }
// }


function displayImage() {
    const imgElement = document.getElementById("displayedImage");

    //Letter
    const input1_letter = document.getElementById("charInput1").value.toUpperCase();
    const input2_letter = document.getElementById("charInput2").value.toUpperCase();

    //Number
    const input1_number = input1_letter.charCodeAt(0); //Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII
    const input2_number = input2_letter.charCodeAt(0); //Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII
    
    // /HINT 3: You can perform simple math operations on the variables
            //Arithmetic: https://www.w3schools.com/js/js_arithmetic.asp
            let mymathresult = input1_number - input2_number;
            console.log(mymathresult); //Console is a way to show a value in the console inspector

            if(mymathresult > 1) { //If mymathresult is less than 1, then show this image
                imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif"
                imgElement.style.display = "block";
            }

            if(mymathresult < 1) { //If mymathresult is less than 1, then show this image
                imgElement.src = "./imgs/nyan.avif"
                imgElement.style.display = "block";
            }

        }

 


    // three
//     if(input1_number == 67 && input2_number == 68) { //If input1_number is 67 (C) AND input2_number is 68 (D), then show this image
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif"
//         imgElement.style.display = "block";
//     }

//     // four
//     if(input1_number == 67 && input2_number == 68) { //If input1_number is 67 (C) AND input2_number is 68 (D), then show this image
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif"
//         imgElement.style.display = "block";
//     }

//     // five
//     if(input1_number == 67 && input2_number == 68) { //If input1_number is 67 (C) AND input2_number is 68 (D), then show this image
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif"
//         imgElement.style.display = "block";
//     }

//     // six
//     if(input1_number == 67 && input2_number == 68) { //If input1_number is 67 (C) AND input2_number is 68 (D), then show this image
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif"
//         imgElement.style.display = "block";
//     }

//     // seven
//     if(input1_number == 67 && input2_number == 68) { //If input1_number is 67 (C) AND input2_number is 68 (D), then show this image
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif"
//         imgElement.style.display = "block";
//     }

//     // eight
//     if(input1_number == 67 && input2_number == 68) { //If input1_number is 67 (C) AND input2_number is 68 (D), then show this image
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif"
//         imgElement.style.display = "block";
//     }

//     // nine
//     if(input1_number == 67 && input2_number == 68) { //If input1_number is 67 (C) AND input2_number is 68 (D), then show this image
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif"
//         imgElement.style.display = "block";
//     }

//     // ten
//     if(input1_number == 67 && input2_number == 68) { //If input1_number is 67 (C) AND input2_number is 68 (D), then show this image
//         imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif"
//         imgElement.style.display = "block";
//     }

//     let mymathresult = input1_number - input2_number;
//     console.log(mymathresult); //Console is a way to show a value in the console inspector






// 
