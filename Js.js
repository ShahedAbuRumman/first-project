
//   check box
document.addEventListener('DOMContentLoaded', function() {
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    const childCheckboxes = document.querySelectorAll('.checkboxes');

    selectAllCheckbox.addEventListener('change', function() {
        childCheckboxes.forEach(checkbox => {
            checkbox.style.display = selectAllCheckbox.checked ? 'inline-block' : 'none';
            checkbox.checked = selectAllCheckbox.checked; 
        });
    });
});

