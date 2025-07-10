# Software Engineering GPA Calculator - University of UOVT

Simple GPA Calculator and analysis tools developed to UOVT

https://uni-gpa-cal.vercel.app/

![Screenshot](https://imgur.com/a/VaoaDzD)

## Frameworks used

- [Angularjs](https://angularjs.org)
- [MaterializeCSS](https://materializecss.com)

Repository: heshanu/unigpacal
Files analyzed: 9

Estimated tokens: 9.1k

Directory structure:
└── heshanu-unigpacal/
    ├── README.md
    ├── index.html
    ├── LICENSE.md
    ├── css/
    │   └── main.css
    ├── js/
    │   ├── app.js
    │   ├── course.js
    │   └── grades.js
    └── .github/
        └── workflows/
            ├── azure-static-web-apps-red-sea-00333591e.yml
            └── jekyll-docker.yml


================================================
FILE: README.md
================================================
# Software Engineering GPA Calculator - University of UOVT

Simple GPA Calculator and analysis tools developed to UOVT

https://uni-gpa-cal.vercel.app/

![Screenshot](https://imgur.com/a/VaoaDzD)

## Frameworks used

- [Angularjs](https://angularjs.org)
- [MaterializeCSS](https://materializecss.com)

## How to use

1. **Fork** the repository.
2. Modify the [js/course.js](js/course.js) file with your course details.
3. Push the commits to the `gh-pages` branch.

## Contribute

Found any bug 🐞? Don't hesitate to open a pull request. 😃

At the time you can calculate till 3rd semester gpa.Looking forward to develop more.



================================================
FILE: index.html
================================================
<!DOCTYPE html>
<html ng-app="app">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>GPA Calculator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
  <meta name="msapplication-TileColor" content="#3f51b5" />
  <meta name="theme-color" content="#3f51b5" />

  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="css/materialize.min.css" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
</head>

<body ng-controller="gpaCtrl" ng-init="updateGPA()">
  <div class="loader blue-grey darken-4">
    <div class="progress blue-grey darken-4">
      <div class="indeterminate indigo"></div>
    </div>
  </div>

  <main>
    <ul id="slide-out" class="sidenav">
      <li>
        <a class="btn-flat hide-on-large-only modal-trigger" href="#modal1">
          <i class="material-icons left">delete_sweep</i> Reset
        </a>
        <a class="btn-flat hide-on-large-only">
          <i class="material-icons left">share</i> Share
        </a>
      </li>
      <li><a class="subheader">Overall</a></li>
      <li>
        <a>
          Num of Credits: {{ myTotalCredit }}
          <small>out of {{ totalCourseCredit }}</small>
        </a>
        <div class="progress">
          <div class="determinate" ng-style="{ 'width' : (myTotalCredit/totalCourseCredit) * 100 + '%' }"></div>
        </div>
      </li>
      <li>
        <a>
          Subjects : {{ mySubjects }}
          <small>out of {{ totalNumOfSubjects }}</small>
        </a>
        <div class="progress">
          <div class="determinate" ng-style="{ 'width' : (mySubjects/totalNumOfSubjects) * 100 + '%' }"></div>
        </div>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a class="subheader">Grades</a></li>
      <li>
        <table class="centered striped">
          <tr class="blue white-text">
            <td>A+</td>
            <td>A</td>
            <td>A-</td>
            <td>B+</td>
            <td>B</td>
          </tr>
          <tr>
            <td>{{results.get(4.0).count || '0'}}</td>
            <td>{{results.get(4.0).count || '0'}}</td>
            <td>{{results.get(3.7).count || '0'}}</td>
            <td>{{results.get(3.3).count || '0'}}</td>
            <td>{{results.get(3.0).count || '0'}}</td>
          </tr>
          <tr>
            <td>{{results.get(4.0).credits || '0'}}</td>
            <td>{{results.get(4.0).credits || '0'}}</td>
            <td>{{results.get(3.7).credits || '0'}}</td>
            <td>{{results.get(3.3).credits || '0'}}</td>
            <td>{{results.get(3.0).credits || '0'}}</td>
          </tr>
        </table>
        <table class="centered striped">
          <tr class="blue white-text">
            <td>B-</td>
            <td>C+</td>
            <td>C</td>
            <td>C-</td>
            <td>D+</td>
            <td>D</td>
            <td>E</td>
          </tr>
          <tr>
            <td>{{results.get(2.7).count || '0'}}</td>
            <td>{{results.get(2.3).count || '0'}}</td>
            <td>{{results.get(2.0).count || '0'}}</td>
            <td>{{results.get(1.7).count || '0'}}</td>
            <td>{{results.get(1.3).count || '0'}}</td>
            <td>{{results.get(1.0).count || '0'}}</td>
            <td>{{results.get(0.0).count || '0'}}</td>
          </tr>
          <tr>
            <td>{{results.get(2.7).credits || '0'}}</td>
            <td>{{results.get(2.3).credits || '0'}}</td>
            <td>{{results.get(2.0).credits || '0'}}</td>
            <td>{{results.get(1.7).credits || '0'}}</td>
            <td>{{results.get(1.3).credits || '0'}}</td>
            <td>{{results.get(1.0).credits || '0'}}</td>
            <td>{{results.get(0.0).credits || '0'}}</td>
          </tr>
        </table>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a class="subheader">Eligibility</a></li>
      <li>
        <div class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-content center">
                <p>
                  <i class="material-icons large" ng-class="eligibleStyle">school</i>
                </p>
                <h5>{{ greetingsText }}</h5>
                <p>{{ eligibilityText }}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue-grey darken-4">
          <img class="brand-logo logo left" src="favicon.png" />
          <img class="brand-logo logo left" src="favicon.png" />
          <div href="#" class="brand-logo GPA center" title="{{ myGPA | number : 2 }}">
            GPA : {{ myGPA | number : 4 }}
          </div>

          <a data-target="slide-out" class="right sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>

          <button class="
                right
                adjust-btn
                btn-flat
                white-text
                hide-on-med-and-down
                modal-trigger
                tooltipped
              " data-position="bottom" data-tooltip="Reset" href="#modal1">
            <i class="material-icons">delete_sweep</i>
          </button>

          <button class="
                right
                adjust-btn
                btn-flat
                white-text
                sidenav-trigger
                hide-on-med-and-down
                tooltipped
              " data-position="bottom" data-tooltip="Analysis" data-target="slide-out">
            <i class="material-icons">explore</i>
          </button>

          <button class="
                right
                adjust-btn
                btn-flat
                white-text
                hide-on-med-and-down
                tooltipped
              " data-position="bottom" data-tooltip="Export" ng-click="downloadResult()">
            <i class="material-icons">download</i>
          </button>

          <div class="
                right
                adjust-btn
                btn-flat
                white-text
                hide-on-med-and-down
                file-field
                input-field
                tooltipped
              " data-position="bottom" data-tooltip="Import">
            <i class="material-icons">attach_file</i>
            <input type="file" onchange="angular.element(this).scope().uploadResult(this)" />
          </div>
        </div>
      </nav>
    </div>

    <div class="container">
      <div class="row subjectTab">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s3" ng-repeat="z in subjects">
              <a class="active" href="#year{{z.year}}">Year {{ z.year }}
                <span class="badge blue white-text tooltipped" data-position="bottom"
                  data-tooltip="Year {{z.year}} GPA">{{ z.yearGPA ? z.yearGPA : 0 | number:2 }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="year{{z.year}}" class="tabContent col s12" ng-repeat="z in subjects">
          <div class="col s12 m6 semContent" ng-repeat="s in z.sems">
            <h6 class="">
              Credits : {{ s.semesterCredit }} / {{ s.totalSemesterCredit }}
              <span style="float: right">GPA: {{ s.semesterGPA | number : 2 }}</span>
            </h6>
            <div class="row subRow" ng-repeat="x in s.subs" title="Subject {{$index+1}} : {{ x.name }}">
              <div class="col s4 m3">
                <span>{{ x.id.substr(0,9) }}<b>{{ x.id.substr(-1) }}</b></span><br />
                <span ng-if="x.type" ng-class="x.type" class="badge left white-text">
                  {{ x.type | getType }}
                </span>
              </div>
              <div class="col s8 m6 subName">{{ x.name }}</div>
              <div class="col s12 m3 input-field">
                <select class="browser-default" ng-class="x.grade | getGradeClass" ng-model="x.grade"
                  ng-change="updateGPA()" ng-options="y.val as y.name for y in grades">
                  <option>-</option>
                  <option></option>
                </select>
              </div>
            </div>
          </div>

          <div class="col s12">
            <ul class="collapsible">
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">arrow_drop_down</i>Summary
                </div>
                <div class="collapsible-body">
                  <div class="row">

                    <div class="col s12 xl8">
                      <h6>Results and Credits Distribution</h6>
                      <table class="centered">
                        <tr class="blue white-text" title="Grade">
                          <td>A+</td>
                          <td>A</td>
                          <td>A-</td>
                          <td>B+</td>
                          <td>B</td>
                          <td>B-</td>
                          <td>C+</td>
                          <td>C</td>
                          <td>C-</td>
                          <td>D+</td>
                          <td>D</td>
                          <td>E</td>
                        </tr>
                        <tr title="Number of Subjects">
                          <td>
                            {{z.yearSummary.get(4.0).count || '0'}}
                          </td>
                          <td>{{z.yearSummary.get(4.0).count || '0'}}</td>
                          <td>{{z.yearSummary.get(3.7).count || '0'}}</td>
                          <td>{{z.yearSummary.get(3.3).count || '0'}}</td>
                          <td>{{z.yearSummary.get(3.0).count || '0'}}</td>
                          <td>{{z.yearSummary.get(2.7).count || '0'}}</td>
                          <td>{{z.yearSummary.get(2.3).count || '0'}}</td>
                          <td>{{z.yearSummary.get(2.0).count || '0'}}</td>
                          <td>{{z.yearSummary.get(1.7).count || '0'}}</td>
                          <td>{{z.yearSummary.get(1.3).count || '0'}}</td>
                          <td>{{z.yearSummary.get(1.0).count || '0'}}</td>
                          <td>{{z.yearSummary.get(0.0).count || '0'}}</td>
                        </tr>

                        <tr title="Number of Credits">
                          <td>
                            {{z.yearSummary.get(4.0).credits || '0'}}
                          </td>
                          <td>{{z.yearSummary.get(4.0).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(3.7).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(3.3).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(3.0).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(2.7).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(2.3).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(2.0).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(1.7).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(1.3).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(1.0).credits || '0'}}</td>
                          <td>{{z.yearSummary.get(0.0).credits || '0'}}</td>
                        </tr>
                      </table>
                    </div>

                    <div class="col s12 xl4">
                      <h6>Credit Table</h6>
                      <ul class="collection">
                        <li class="collection-item">
                          <div>
                            Total credits of Year {{ z.year }}
                            <span class="secondary-content">{{ z.yearCredit }}</span>
                          </div>
                        </li>
                        <li class="collection-item">
                          <div>
                            A or better credits of Year {{ z.year }}
                            <span class="secondary-content">{{
                              z.yearSummary.get(4.0).credits +
                              z.yearSummary.get(4.0).credits || 0 }}</span>
                          </div>
                        </li>
                        <li class="collection-item">
                          <div>
                            B or better credits of Year {{ z.year }}
                            <span class="secondary-content">{{
                              z.yearSummary.get(4.0).credits +
                              z.yearSummary.get(4.0).credits +
                              z.yearSummary.get(3.7).credits +
                              z.yearSummary.get(3.3).credits +
                              z.yearSummary.get(3.0).credits || 0}}</span>
                          </div>
                        </li>
                        <li class="collection-item">
                          <div>
                            C or better credits of Year {{ z.year }}
                            <span class="secondary-content">{{
                              z.yearSummary.get(4.0).credits +
                              z.yearSummary.get(4.0).credits +
                              z.yearSummary.get(3.7).credits +
                              z.yearSummary.get(3.3).credits +
                              z.yearSummary.get(3.0).credits +
                              z.yearSummary.get(2.7).credits +
                              z.yearSummary.get(2.3).credits +
                              z.yearSummary.get(2.0).credits || 0}}</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="blue-grey darken-4">
    <div class="footer-copyright">
      <div class="container">
        GPA Calculator - {{ courseTitle }}
      </div>
    </div>
  </footer>

  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Are you sure?</h4>
      <p class="center">
        <i class="material-icons large grey-text">delete</i> <br />By
        resetting all your data will be deleted and reset to empty status.
        This action can't undone.
      </p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn grey">Cancel</a>
      <a href="#!" class="modal-close waves-effect waves-green btn indigo" ng-click="reset()">Reset</a>
    </div>
  </div>

  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/materialize.min.js"></script>
  <script src="js/angular.min.js"></script>
  <script src="js/grades.js"></script>
  <script src="js/course.js"></script>
  <script src="js/app.js"></script>
</body>

</html>



================================================
FILE: LICENSE.md
================================================
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



================================================
FILE: css/main.css
================================================
html {
    font-size: 14px;
}

body {
    font-family: 'Roboto', sans-serif;
    cursor: default;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

::selection {
    background: #333;
    color: #fff;
}

::-moz-selection {
    background: #333;
    color: #fff;
}

.nav-wrapper {
    padding: .5em;
}

.nav-wrapper .adjust-btn {
    margin-top: -0.5em !important;
    height: 100% !important;
    width: 5em;
}

.logo {
    height: 80%;
    margin-top: 0em;
}

.GPA {
    margin-top: -0.25em;
}

.subjectTab {
    margin-top: 2em;
}

.subjectTab .row {
    padding: .5em;
    margin: 0;
    border: 1px solid #eee;
}

.subjectTab .row:nth-child(even) {
    background: #eee;
}

.subjectTab h5, .subjectTab h6 {
    margin: 0;
    padding: .75em;
    background: #263238;
    color: #fff;
}

.sidenav li p {
    line-height: 1.5em;
}

.sidenav table {
    table-layout: fixed;
}

.sidenav table td {
    padding: 0;
    border: 1px solid #ddd;
}

/* .subRow {    
    position: relative;
}

.subIndexNumber {
    display: none;
    position: absolute;
    left: -1.25em;
    background: #263238ff;;
    color: #fff;
    width: 2em;
    text-align: center;
} */

.input-field {
    margin: 0;
}

select {
    height: 3rem;
    text-align: center;
}

.dropdown-content li>a, .dropdown-content li>span {
    color: #111;
}

.select-wrapper input.select-dropdown, .select-wrapper input.select-dropdown:focus {
    border-bottom: none;
}

.row .col.tab {
    background: #fff;
}

.semContent .o {
    background: #333;
}

.semContent .n {
    background: #3f51b5;
}

.semContent .m {
    background: #4caf50;
}

.semContent .d {
    background: #e57373;
}

.semContent .g {
    background: #4a148c;
}

.semContent .h {
    background: #ffab00;
}

.semContent .b {
    background: #00796b;
}

.tab {
    background: #3f51b5;
}

.tab a {
    color: #333 !important;
}

.tab a.active {
    background-color: #263238 !important;
    color: #fff !important;
}

.indicator {
    display: none;
    background-color: #263238 !important;
}

.subjectTab .tabContent {
    padding: 2em;
}

.semContent {
    margin-bottom: 1em;
}

.semContent .badge {
    margin-left: 0;
    font-size: .75em;
}

footer {
    padding: 1em;
    color: #fff;
}

main {
    flex: 1 0 auto;
}

.loader {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99999999999999999999999999999;
}

.progress {
    top: 50%;
    transform: translate(-50%);
    width: 50%;
    left: 50%;
}

.floating-stat {
    display: none;
    background: #fff;
}

@media screen and (max-width: 1200px) {
    .container {
        width: 100%;
    }
    .row .col {
        padding: 0.1em .5em;
    }
}

@media screen and (min-width: 700px) {
    .subjectTab {
        border-radius: 10px;
        background: #fff;
        box-shadow: 0 0 10px #ddd;
    }
    .tab a {
        border-radius: 0 0 10px 10px;
    }
    body {
        background: #eee;
    }
}

@media screen and (min-width: 1200px) {}


================================================
FILE: js/app.js
================================================
var app = angular.module("app", []);

angular.element(function () {
    $(".tabs").tabs();
    $("select").formSelect();
    $(".loader").delay(500).fadeOut();
    $(".sidenav").sidenav();
    $(".modal").modal();
    $(".tooltipped").tooltip();
    $('.collapsible').collapsible();

});

app.run(function ($rootScope) {
    $rootScope.courseTitle = courseName;
});

app.filter("getType", function () {
    return function (x) {
        let types = {
            o: "Optional",
            n: "Net",
            m: "Mobile",
            d: "Data",
            h: "Health",
            b: "Business",
            g: "Gaming",
        };
        return types[x];
    };
});

app.filter("getGradeClass", function () {
    return function (x) {
        let className = "";
        if (x > 4.0) {
            className = "light-green accent-3";
        } else if (x == 4.0) {
            className = "light-green accent-2";
        } else if (x >= 3.0) {
            className = "cyan accent-3";
        } else if (x >= 2.0) {
            className = "amber lighten-2";
        } else if (x != null && x != undefined && x >= 0) {
            className = "lime lighten-4";
        } else {
            className = "";
        }
        return className;
    };
});

app.controller("gpaCtrl", function ($scope) {
    $scope.grades = gradeValues;
    $scope.subjects = courseUnits;
    $scope.savedSubjects = localStorage.getItem("subjects");

    $scope.reset = function reset() {
        localStorage.removeItem("subjects");
        window.location.reload();
    };

    $scope.downloadResult = function downloadResult() {
        let data = JSON.stringify($scope.subjects);
        let name_date = new Date().toISOString().split("T")[0];
        let href = "data:text/json;charset=utf-8," + encodeURIComponent(data),
            anchor = document.createElement("a"),
            filename = "gpa-calc-export - " + name_date + ".json";
        anchor.setAttribute("href", href);
        anchor.setAttribute("download", filename);
        anchor.setAttribute("type", "json");
        anchor.click();
    };

    $scope.uploadResult = function uploadResult(fileEl) {
        var files = fileEl.files;
        var file = files[0];
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            if (evt.target.readyState === FileReader.DONE) {
                $scope.$apply(function () {
                    $scope.subjects = JSON.parse(evt.target.result);
                    $scope.updateGPA();
                });
            }
        };
        reader.readAsText(file);
    };

    function calGPA(sumOfGPA, sumOfCredits) {
        return sumOfCredits > 0 ? sumOfGPA / sumOfCredits : 0;
    }

    function findEligibility(gpa) {
        let greetingsText = "Hello",
            eligibilityText = "World",
            style = "green-text";

        if (gpa >= 3.7) {
            style = "green-text";
            greetingsText = "Brilliant!";
            eligibilityText = 'You are maintaining "First Class" degree. Keep it up!';
        } else if (gpa >= 3.3) {
            style = "teal-text";
            greetingsText = "Very Good!";
            eligibilityText =
                'Currently you are in "Second Upper" degree level. Try little bit more to go to the "First Class".';
        } else if (gpa >= 3.0) {
            style = "blue-text";
            greetingsText = "Good!";
            eligibilityText =
                'Currently you are in "Second Lower" degree level. Keep going.';
        } else if (gpa >= 2.0) {
            style = "grey-text";
            greetingsText = "Hmmm...";
            eligibilityText =
                'Is "General Degree" enough for you? Work Hard! You can do better.';
        } else {
            style = "red-text";
            greetingsText = "Sorry!";
            eligibilityText = "Currently you are not eligible for the degree.";
        }

        return {
            greetingsMsg: greetingsText,
            eligibilityMsg: eligibilityText,
            style: style,
        };
    }

    $scope.updateGPA = function updateGPA() {
        M.toast({
            html: "Saving...",
            displayLength: 500,
            classes: "indigo",
        });

        let myResults = [];
        let mySubjects = 0,
            totalNumOfSubjects = 0;
        let myTotalGPA = 0,
            myTotalCredit = 0,
            totalCourseCredit = 0;

        for (i = 0; i < $scope.subjects.length; i++) {
            let currentYear = $scope.subjects[i],
                yearGPA = 0,
                yearCredit = 0;

            for (k = 0; k < currentYear.sems.length; k++) {
                let semester = $scope.subjects[i].sems[k];

                let semesterGPA = 0,
                    semesterCredit = 0,
                    totalSemesterCredit = 0;

                for (j = 0; j < semester.subs.length; j++) {
                    let currentSubject = semester.subs[j];
                    let subjectCredit = 1 * currentSubject.id.substr(-3);

                    totalNumOfSubjects += 1;

                    if (currentSubject.grade != null && currentSubject.grade != undefined) {
                        myResults.push({
                            year: parseInt(i + 1),
                            grade: currentSubject.grade,
                            credit: parseInt(currentSubject.id.substr(-3)),
                        });
                        mySubjects += 1;


                        let subjectGPA;
                        if (currentSubject.id == 'IT514011') {
                            subjectGPA = currentSubject.grade * 14;
                        }

                        subjectGPA = currentSubject.grade * currentSubject.id.substr(-3);

                        semesterGPA += subjectGPA;
                        yearGPA += subjectGPA;
                        myTotalGPA += subjectGPA;

                        semesterCredit += subjectCredit;
                        yearCredit += subjectCredit;
                        myTotalCredit += subjectCredit;
                    }

                    totalCourseCredit += subjectCredit;
                    totalSemesterCredit += subjectCredit;
                }

                semester.semesterCredit = semesterCredit;
                semester.totalSemesterCredit = totalSemesterCredit;
                semester.semesterGPA = calGPA(semesterGPA, semesterCredit);
            }

            currentYear.yearGPA = yearGPA / yearCredit;
            currentYear.yearCredit = yearCredit;

            currentYear.yearSummary = (i + 1, myResults.reduce(
                (acc, e) => {
                    if (e.year === i + 1) {
                        acc.set(e.grade, {
                            count: (acc.get(e.grade) ? acc.get(e.grade).count + 1 : 1),
                            credits: (acc.get(e.grade) ? acc.get(e.grade).credits + e.credit : e.credit)
                        });
                    }
                    return acc;
                },
                new Map()
            ));
            console.log(currentYear.yearSummary);
        }

        $scope.results = myResults.reduce(
            (acc, e) =>
                acc.set(e.grade, {
                    count: (acc.get(e.grade) ? acc.get(e.grade).count + 1 : 1),
                    credits: (acc.get(e.grade) ? acc.get(e.grade).credits + e.credit : e.credit)
                }),
            new Map()
        );

        $scope.mySubjects = mySubjects;
        $scope.totalNumOfSubjects = totalNumOfSubjects;
        $scope.myTotalCredit = myTotalCredit;
        $scope.totalCourseCredit = totalCourseCredit;
        $scope.myGPA = calGPA(myTotalGPA, myTotalCredit);

        const { greetingsMsg, eligibilityMsg, style } = findEligibility(
            $scope.myGPA
        );

        $scope.greetingsText = greetingsMsg;
        $scope.eligibilityText = eligibilityMsg;
        $scope.eligibleStyle = style;

        localStorage.setItem("subjects", angular.toJson($scope.subjects));
        localStorage.setItem("myGPA", angular.toJson($scope.myGPA));
    };

    if ($scope.savedSubjects != undefined) {
        $scope.loadSubjects = JSON.parse($scope.savedSubjects);

        try {
            for (i = 0; i < $scope.subjects.length; i++) {
                let year = $scope.subjects[i];
                for (k = 0; k < year.sems.length; k++) {
                    let sem = $scope.subjects[i].sems[k];
                    for (j = 0; j < sem.subs.length; j++) {
                        sem.subs[j].grade = $scope.loadSubjects[i].sems[k].subs[j].grade;
                    }
                }
            }
            $scope.updateGPA();
        } catch (err) {
            $scope.reset();
            console.log("resetting...\n" + err);
        }
    }
});


================================================
FILE: js/course.js
================================================

var courseName = "B Tech in Software Technology - University of Vocational Technology";

var courseUnits = [
    {
        year: '1',
        sems: [
            {
                sem: '1',
                semCredits: 24,
                subs: [{
                    name: 'Mathematics for ICT 1',
                    id: 'IT103011',
                    moduleCredit: 3
                }, {
                    name: 'Computer Programming',
                    id: 'IT104021',
                    moduleCredit: 4
                }, {
                    name: 'Software Development Practices',
                    id: 'IT104031',
                    moduleCredit: 4
                }, {
                    name: 'Data Communication and Network',
                    id: 'IT104051',
                    moduleCredit: 3
                }, {
                    name: 'Digital Eletronics',
                    id: 'IT104041',
                    moduleCredit: 3
                }, {
                    name: 'Database Design',
                    id: 'IT104061',
                    moduleCredit: 3
                },
                {
                    name: 'Internet Techonlogy',
                    id: 'IT104071',
                    moduleCredit: 4
                },

                ]
            },
            {
                sem: '2',
                semCredits: 31,
                subs: [{
                    name: 'Operation Systems',
                    id: 'IT202011',
                    moduleCredit: 2
                }, {
                    name: 'Mathematics for ICT 11',
                    id: 'IT203021',
                    moduleCredit: 3
                }, {
                    name: 'Computer Architecture',
                    id: 'IT203031',
                    moduleCredit: 3
                }, {
                    name: 'Data Struture and Algorithms',
                    id: 'IT204041',
                    moduleCredit: 4
                }, {
                    name: 'Database and programming',
                    id: 'IT206051',
                    moduleCredit: 6
                }, {
                    name: 'Visual Programming 1',
                    id: 'IT204061',
                    moduleCredit: 4
                },
                {
                    name: 'Web Programming',
                    id: 'IT206071',
                    moduleCredit: 6
                },
                {
                    name: 'Computer Network',
                    id: 'IT203081',
                    moduleCredit: 3
                }
                ]
            }
        ]
    },
    {
        year: '2',
        sems: [
            {
                sem: '3',
                semCredits: 32,
                subs: [
                    {
                        name: 'Web Technology and Application',
                        id: 'IT304011',
                        
                    }, {
                        name: 'PIP',
                        id: 'IT304021',
                    }, {
                        name: 'Visual Programming 11',
                        id: 'IT306031', 
                    }, {
                        name: 'Software Arch and Design',
                        id: 'IT306041', 
                    },
                    {
                        name: 'Software Deployment and Evolution',
                        id: 'IT30405',
                    }
                    , {
                        name: 'Database Implmentation',
                        id: 'IT304061', 
                    }, {
                        name: 'Entrepreurship Development and Management',
                        id: 'MS304121',
                    }
                    
                ]
            },
            {
                sem: '4',
                semCredits: 28,
                subs: [{
                    name: 'Mobile Application Development',
                    id: 'IT404010'
                }, {
                    name: 'Cloud Based Application Development',
                    id: 'IT404020'
                }, {
                    name: 'Human Computer Interaction',
                    id: 'IT402030'
                }, {
                    name: 'Real Time Programming',
                    id: 'IT404041'
                }, {
                    name: 'Software Testing and Reliability',
                    id: 'IT406051'
                }, {
                    name: 'Enterprising System Technologies and Arch',
                    id: 'IT406051',
                    // type: 'o'
                }, {
                    name: 'UX Enginneering',
                    id: 'IT402070',
                    //type: 'o'
                },
                {
                    name: 'Research Methodolgy',
                    id: 'MS403130',
                    //type: 'o'
                },

                ]
            }
        ]
    },
    {
        year: '3',

        sems: [
            {
                sem: 5,
                subs: [
                    {

                        id: "IT514011", name: "Work Based/Traning"

                    }
                ]
            },
            {
                sem: 6,
                subs: [
                    {
                        id: "IT604011",
                        name: "Professional Issues in IT"
                    },
                    {
                        id: "IT604021",
                        name: "Enterprise System Design"
                    },
                    {
                        id: "IT604030",
                        name: "Enterprise Resource plaining Systems"
                    },
                    {
                        id: "IT604040",
                        name: "Intelligent Systems"
                    },
                    {
                        id: "IT604051",
                        name: "Information Systems Security And Practices"
                    },
                    {
                        id: "IT604061",
                        name: "Software project management"
                    },
                    {
                        id: "IT604071",
                        name: "Enterprise Application Development"
                    },
                    {
                        id: "IT604090",
                        name: "Game Development and programming"
                    },
                    {
                        id: "IT603100",
                        name: "Digital Marketing"
                    },
                    {
                        id: "IT612111",
                        name: "Final Year Project"
                    },
                ]
            }
        ]


    }
];



================================================
FILE: js/grades.js
================================================
var gradeValues = [
    {
        name: "A+",
        val: 4.0
    },
    {
        name: "A",
        val: 4.0
    },
    {
        name: "A-",
        val: 3.7
    },
    {
        name: "B+",
        val: 3.3
    },
    {
        name: "B",
        val: 3.0
    },
    {
        name: "B-",
        val: 2.7
    },
    {
        name: "C+",
        val: 2.3
    },
    {
        name: "C",
        val: 2.0
    },
    {
        name: "C-",
        val: 1.7
    },
    {
        name: "D+",
        val: 1.3
    },
    {
        name: "D",
        val: 1.0
    },
    {
        name: "E",
        val: 0.0
    }
];



================================================
FILE: .github/workflows/azure-static-web-apps-red-sea-00333591e.yml
================================================
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - master
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - master

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
          lfs: false
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_RED_SEA_00333591E }}
          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)
          action: "upload"
          ###### Repository/Build Configurations - These values can be configured to match your app requirements. ######
          # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig
          app_location: "/" # App source code path
          api_location: "" # Api source code path - optional
          output_location: "." # Built app content directory - optional
          ###### End of Repository/Build Configurations ######

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request Job
    steps:
      - name: Close Pull Request
        id: closepullrequest
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_RED_SEA_00333591E }}
          action: "close"



================================================
FILE: .github/workflows/jekyll-docker.yml
================================================
name: Jekyll site CI

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4
    - name: Build the site in the jekyll/builder container
      run: |
        docker run \
        -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
        jekyll/builder:latest /bin/bash -c "chmod -R 777 /srv/jekyll && jekyll build --future"

