# Mappings

|From|To|Notes
---|---|---
$q.when|Promise.resolve
$q.reject|Promise.reject
$q.all|Promise.all
$q.defer()|new Promise(function(resolve, reject) {});
$http|axios
(in $http reject handler) error.data|error.response.data|$http reject handler -> Axios reject handler
$cookies|Cookies|from [js-cookie](https://github.com/js-cookie/js-cookie)
$rootScope.$emit|EventBus.$emit|needs `import { EventBus } from '@/eventBus';` (See https://vuejs.org/v2/guide/migration.html#dispatch-and-broadcast-replaced)
$rootScope.$broadcast|EventBus.$emit|
$rootScope.$on|EventBus.$on
$log|console
$element|this.$el
angular.extend|Object.assign
angular.copy(foo)|Object.assign({}, foo)
$timeout|window.setTimeout
$timeout.cancel|window.clearTimeout
ng-hide|v-show|Need to negate the condition
ng-repeat|v-for
(filter) limitTo: 4|computed property that returns the first 4 entries|https://vuejs.org/v2/guide/migration.html#Filters
$id|_uid
$rootScope.varName|EventBus.varName
