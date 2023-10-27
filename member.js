function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindTocController: true,
        scope: {
            member: '='
        }
    };
}