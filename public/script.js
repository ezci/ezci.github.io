let links =  [].slice.call(document.getElementById('navigation').children)
links.forEach(link => {
    link.addEventListener("click", event=> {
        document.getElementById(link.attributes.href.value).scrollIntoView()
    })
})

document.querySelector(".download>span").addEventListener("click", function(e){
    var source = document.getElementsByClassName("middlec")[0].children;
    let heights = Array.prototype.slice.call(source).map(element => element.clientHeight*0.71)
    canvase = new Array(heights.length)
    let added = 0
    for(var i=0;i<source.length;i++){
        const idx = i
        let element = source[i]
        html2canvas(element).then(function (canvas) {
            canvase[idx] = canvas
            added++
            console.log(added)
            if(added === canvase.length){
                printPdf(heights, canvase)       
            }
        });    
    }
})

function printPdf(heights, canvase) {
    var doc = new jsPDF('p', 'pt', 'a4');
    var width = doc.internal.pageSize.getWidth()-20;
    var pageHeight = doc.internal.pageSize.getHeight();
    console.log("width:"+width)
    console.log("height:"+pageHeight)
    let currentHeight = 30;
    console.log(heights)
    for (var i = 0; i < canvase.length; i++) {
        var elementHeight = heights[i]
        if (currentHeight + elementHeight > pageHeight) {
            doc.addPage()
            currentHeight = 30
        }
        var img = canvase[i].toDataURL("image/png")
        doc.addImage(img, 'JPEG', 5, currentHeight, width, elementHeight)
        currentHeight += elementHeight + 30   
        console.log("currentHeight:" + currentHeight)
    }
    doc.save('resume.pdf')
    return { i, i, currentHeight }
}
let content = {
    projects: [
        {
        name: 'Groupware Integration and Testing Automation',
        company: 'Belastingdienst (Cimsolutions)',
        content: 'Integrated customs application retrieval system within the IBM groupware with the central taxation system, as well as authoring smoke tests and generating test data with Robot Framework',
        tools: 'Lotus Notes, Java, JAX-WS, Robot Framework, Selenium'
        },{
        name: 'Visualization for Real-time Measurements of a Voyager Vehicle',
        company: 'Clean2Antarctica (Cimsolutions)',
        content: 'integrated real-time measurements of a voyager vehicle traversing Antarctica for sustainability awareness and visualized with web based charts',
        tools: 'Spring Boot, Angular, D3.js'
        },{
        name: 'Wafer Production Control Screen Renovation',
        company: 'ASM International (Cimsolutions)',
        content: 'redesigned ~600 screens of wafer production machines following installation of a lookandfeel plugin and separating the controller layer allowing dynamic UI plugin installation as well as creating new screens for authorization',
        tools: 'Java AWT/Swing, lookandfeel'
        },{
        name: 'Internet of Things for Smart Home & Security',
        company: 'Egardia',
        content: 'Developed 40+ small features in a scrum team for an IoT platform including maintenance of virtualized host and linux nodes with KVM/QEMU, batch jobs for regular operations, real-time bash scripts for audio/video conversion for surveillance, microservices for control panel applications, building NSF4 repositories for storage, adding new features to the web application and building a caching mechanism for text-to-speech engine resulting in decreased computation and license use, system failures and faster alarm scenarios',
        tools: 'Netty, Spring Framework, JSF, Liferay, Hibernate,  Percona MySQL, Nuance TTS, UniMRCP, Asterix PBX, Bash Scripting, SoX, NSF4, KVM/QEMU, Java Quartz, ActiveMQ, Tomcat, systemd, Mockito... '
        },{
        name: 'Internet Banking Automation for Callcenter Agents',
        company: 'Yapi Kredi Bank (OBSS)',
        content: 'integrated internet banking application with call center agent software via iframe messaging archiving  simplified call center operations',
        tools: 'Java, Javascript, Spring, Hibernate, Oracle 12C'
        },{
        name: 'Batch Data Retrieval Processing',
        company: 'Yapi Kredi Bank (OBSS)',
        content: 'diagnosed and resolved a redundancy in processing monthy batch data from KKB resulting in ~90% reduction in time and processing power',
        tools: 'Java, Spring, Hibernate, Oracle Database'
        },{
        name: 'SFA Mortgage Automation',
        company: 'Yapi Kredi Bank (OBSS)',
        content: 'designed and developed screens for expertise inquiry for mortgage loans as well as integrating with third-party expertise agency.',
        tools: 'Java, Spring, Hibernate, Javascript, Oracle, Maven, JAX-WS'
        },{
        name: 'Data Gathering for Loaning Assessment',
        company: 'Yapi Kredi Bank (OBSS)',
        content: 'issued more than 50 features and bugfixes for personal loaning Assessment inquiry involving collecting data from various third-party agencies and other banking modules and developing screens for inhouse assessment staff',
        tools: 'Java, Spring, Hibernate, Oracle, Maven, JAX-WS, CXF'
        },{
        name: 'Bidding Tool for Commercial Sales',
        company: ' Turkcell Technology',
        content: 'developed a intranet solution for commercial sales representitives to calculate customer-specific bundle offers',
        tools: 'Java, Spring, Hibernate, Oracle, LDAP'
        },{
        name: 'ETL for Financial Analytics ',
        company: ' Turkcell Technology',
        content: 'designed and developed dozens of ETL jobs to serve financial analytics needs',
        tools: 'Ab Initio, ODI, Oracle Pl/SQL'
        },{
        name:'Bogazici University Issue Tracking Platform',
        company:'Bogazici University Web Unit',
        content:'designed and developed a new generation issue tracking to create, assign and follow issues of dynamically defined types to be used by all university institutes',
        tools:'PHP, MySQL, Javascript, HTML, CSS'
     }
],
    certifications: [
        { name: 'Oracle Certified Professional', by: 'Oracle'},
        { name: 'Oracle Certified Associate', by: 'Oracle'},
        { name: 'Professional Scrum Master', by: 'scrum.org'},
        { name: 'ISTQB Certified Tester', by: 'ISTQB'},
        { name: 'Getting Started With Google Kubernetes', by: 'Coursera'},
        { name: 'Continuous Integration', by: 'Coursera'},
        { name: 'Structuring Machine Learning Projects', by: 'Coursera'},
        { name: 'Neural Networks and Deep Learning', by: 'Coursera'},
        { name: 'Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization', by: 'Coursera'}
    ],
    pprojects: [
        { name: 'robot framework test generator', 
          content: 'chrome extension tool to capture and run browser events allowing to export as Robot Framework test case as well as JSON and HTML'}, 
        { name: 'business model canvas', 
          content: 'web based business canvas editor'}, 
        { name: 'genre visualisation', 
          content: 'web based genre extraction and visualisation app based on Spotify Data'}, 
        { name: 'vnc-pack', 
          content: 'docker based solution for managing scalable virtual desktop screens'}, 
        { name: 'name generator', 
          content: 'web based word completion app with parametrized prefix and postfix phrases'}, 
        { name: 'logout master', 
          content: 'chrome extension tool to log out from popular social media and news sites'}, 
        { name: 'screen mirror', 
          content: 'chrome extension tool to flip or rotate browser content'}, 
        { name: 'angular rename', 
          content: 'npm package to change component names with all references'}
    ],
    experiences: [
        { company: 'Cimsolutions B.V.',     date: 'Oct 2017 - Feb 2020', title: 'Development Consultant'},
        { company: 'Woonveilig B.V.',       date: 'Nov 2016 - Oct 2017', title: 'Java/IoT Developer'},
        { company: 'OBSS',                  date: 'Sept 2014 - Sept 2016', title: 'Development Consultant'},
        { company: 'Turkcell Technology',   date: 'July 2013 - Sept 2014', title: 'DWH/Backend Developer'},
        { company: 'Bogazici University',   date: 'Jan 2013 - May 2013', title: 'Web Developer'}
    ],
    educations: [
        { school: 'Bogazici University', date: 'Jan 2016 - Ragequit', dept: 'Computer Engineering M.Sc.'},
        { school: 'Bogazici University', date: 'Sept 2010 - Jun 2014', dept: 'Computer Engineering B.Sc.'},
        { school: 'Bogazici University', date: 'Sept 2009 - June 2010', dept: 'English Prep School'}
    ]
}
function fillTemplate( templateid, data ){
    return document.getElementById( templateid ).innerHTML.replace(/%(\w*)%/g,
        function( _, key ){
          return data.hasOwnProperty( key ) ? data[ key ] : "";
        });
}

function fillTemplates( node){
    content[node].forEach(element=>{
        document.getElementById(node).innerHTML += fillTemplate(node + '-template', element)
    })
}

window.onload = function(){
    Object.keys(content).forEach(nodeName => {
        fillTemplates( nodeName) 
    })
}