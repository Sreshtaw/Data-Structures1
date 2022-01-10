name_of_the_studentarray=[];

function submit() {
    var display_student_array=[];
    for (var j=1; j<=4; j++){
        var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
name_of_the_studentarray.push(name_of_the_student);
    }
     console.log(name_of_the_studentarray);
var length_of_array=name_of_the_studentarray.length;
console.log(length_of_array);
for (var k=0; k<length_of_array; k++) {
    display_student_array.push("<h4>Name - "+ name_of_the_studentarray[k]+"</h4>");
    console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var removecommas=display_student_array.join(" ");
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML=removecommas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
    }

    function sorting() {
        name_of_the_studentarray.sort();
        console.log(name_of_the_studentarray);
        var display_sort=[];
        var length_of_array=name_of_the_studentarray.length;

        for (var k=0; k<length_of_array; k++) {
            display_sort.push("<h4>Name - "+ name_of_the_studentarray[k]+"</h4>");
            console.log(display_sort);
            
        }
        var removecommas=display_sort.join(" ");
            console.log(removecommas);
            document.getElementById("display_name_without_commas").innerHTML=removecommas;
    }