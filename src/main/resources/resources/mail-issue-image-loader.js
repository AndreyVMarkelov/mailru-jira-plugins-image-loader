/*
 * Created by Dmitry Miroshnichenko 01-12-2012. Copyright Mail.Ru Group 2012.
 * All rights reserved.
 */
jQuery(document).ready(function() {
    var contextPath = "/jira"; //--> forexample, /jira

    jQuery("#heading-avatar").hide();
    var projectElem = jQuery('#project-name-val');
    var issueElem = jQuery('#type-val');

    // Issue tab
    if (projectElem.length > 0 && issueElem.length > 0) {
        projectName = jQuery.trim(projectElem.text());
        issueTypeName = jQuery.trim(issueElem.text());

        var avatar = jQuery("#project-avatar");
        var headingAvatar = jQuery("#heading-avatar");
        var avatarSrc = jQuery(avatar).attr('src');

        if (avatar.length > 0 && headingAvatar.length > 0) {
            avatar.removeAttr("src");
            var htPath =
                contextPath + "/plugins/servlet/mailru/imageloader/issue?projectname="
                + projectName + "&issuetypename=" + issueTypeName + "&avatarSrc=" + avatarSrc;
            avatar.attr('src', htPath);
            avatar.removeClass('project-avatar-48');
            avatar.attr('width', 'auto');
            avatar.attr('height', 'auto');
            headingAvatar.css('width', 'auto');
            headingAvatar.css('height', 'auto');
        }
    }

    // Project tab
    var projectTabAvatar = jQuery('#project-avatar');
    var issueElem = jQuery('#type-val');
    if (projectTabAvatar.length > 0 && issueElem.length <= 0) {
        var headingAvatar = jQuery('#heading-avatar');
        var projectName = jQuery(projectTabAvatar).attr('alt');
        var avatarSrc = jQuery(projectTabAvatar).attr('src');
        projectTabAvatar.removeAttr("src");
        var htPath =
            contextPath + "/plugins/servlet/mailru/imageloader/issue?projectname="
            + projectName + "&issuetypename=&avatarSrc=" + avatarSrc;
        projectTabAvatar.attr('src', htPath);

        projectTabAvatar.removeClass('project-avatar-48');
        projectTabAvatar.attr('width', 'auto');
        projectTabAvatar.attr('height', 'auto');
        headingAvatar.css('width', 'auto');
        headingAvatar.css('height', 'auto');
    }

    // Administration tab
    var adminTabProjects = jQuery('.as-recent-projects');
    if (adminTabProjects.length > 0) {
        for (var i = 0; i < adminTabProjects.length; i++) {
            var projectNameElem = jQuery("#" + adminTabProjects[i].id).children('.as-recent-project-name');
            var projectName = projectNameElem.text();
            var projectIcon = jQuery("#" + adminTabProjects[i].id).children('.as-recent-project-icon');
            var imgElem = jQuery("#" + projectIcon[0].id).children();
            var avatarSrc = jQuery(imgElem).attr('src');
            imgElem.removeAttr("src");
            var htPath =
                contextPath + "/plugins/servlet/mailru/imageloader/issue?projectname="
                + projectName + "&issuetypename=&avatarSrc=" + avatarSrc;
            imgElem.attr('src', htPath);
        }
    }

    // Administration project detail
    var projectTabAvatar = jQuery('#project-config-header-avatar');
    var projectTabName = jQuery('#project-config-header-name');
    if (projectTabAvatar.length > 0 && projectTabName.length > 0) {
        var projectName = projectTabName.text();
        var avatarSrc = jQuery(projectTabAvatar).attr('src');
        projectTabAvatar.removeAttr('src');
        var htPath =
            contextPath + "/plugins/servlet/mailru/imageloader/issue?projectname="
            + projectName + "&issuetypename=&avatarSrc=" + avatarSrc;
        projectTabAvatar.attr('src', htPath);
    }

    jQuery("#heading-avatar").show();
});
