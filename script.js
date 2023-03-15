        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
             for (tabContent of tabcontents) {
                tabContent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")

        }