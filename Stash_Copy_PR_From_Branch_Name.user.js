// ==UserScript==
// @name         copy_pr_branch_name_stash
// @namespace    mvper
// @version      0.0.1
// @description  copy_pr_branch_name_stash
// @include      https://*/stash/*/pull-requests/*
// ==/UserScript==


let styleSheet = `
.copyBranchBtn {
    background-color: green;
    padding: 1px;
    font-size: 12px;
    font-weight:550;
    color: white;
}
`;

let s = document.createElement('style');
s.type = "text/css";
s.innerHTML = styleSheet;
(document.head || document.documentElement).appendChild(s);


window.addEventListener('load', function() {
    'use strict';

   function copy() {
        let temp = document.createElement('textarea');
        document.body.appendChild(temp);
        temp.value = document.getElementsByClassName("ref-lozenge-content")[0].innerText;
        temp.select();
        document.execCommand('copy');
        temp.remove();
    }


    function addCopyBtn(ele) {
        let btn = document.createElement("button");
        btn.innerHTML = "Copy branch name";
        btn.className = "copyBranchBtn";
        btn.onclick = () => {
            copy();
        }

        ele.insertBefore(document.createElement('br'), ele.childNodes[0]);
        ele.insertBefore(btn, ele.childNodes[0]);
    }



    let pullRequestMetadata = document.getElementsByClassName("pull-request-metadata");

    addCopyBtn(pullRequestMetadata[0]);


})();