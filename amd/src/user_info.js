//import templates from 'core/templates';
import log from 'core/log';

export const get_info = () => {
    const lis = document.getElementsByClassName('block_modals_unmarked');
    const modal = document.getElementById('block_modals_myModal');
    const span = document.getElementsByClassName('block_modals_close')[0];
    const content = document.querySelector('.block_model_details');
    const label = content.childNodes[1].innerHTML;

    span.onclick = function() {
        modal.style.display = "none";
        content.childNodes[1].innerHTML = label;
    };

    for (let li of lis) {
        li.onclick = function() {
            modal.style.display = "block";
            log.info(content.childNodes[1].innerHTML);
            content.childNodes[1].innerHTML = label + li.innerHTML;
        };
    }
};