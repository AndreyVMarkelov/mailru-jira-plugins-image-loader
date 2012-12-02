/*
 * Created by Dmitry Miroshnichenko 01-12-2012. Copyright Mail.Ru Group 2012.
 * All rights reserved.
 */
jQuery(document).ready(function() {
    jQuery("#heading-avatar").hide();
    var projectElem = jQuery('#project-name-val');
    var issueElem = jQuery('#type-val');

    if (projectElem != null && issueElem != null) {
        projectName = jQuery.trim(projectElem.text());
        issueTypeName = jQuery.trim(issueElem.text());

        var avatar = jQuery("#project-avatar");
        var headingAvatar = jQuery("#heading-avatar");
        var avatarSrc = jQuery(avatar).attr('src');

        if (avatar != null && headingAvatar != null) {
            avatar.removeAttr("src");
            avatar.attr('src',
                "/jira/plugins/servlet/mailru/imageloader/issue?projectname="
                + projectName + "&issuetypename="
                + issueTypeName + "&avatarSrc=" + avatarSrc);
            jQuery("#heading-avatar").show();
            avatar.removeClass('project-avatar-48');
            avatar.attr('width', 'auto');
            avatar.attr('height', 'auto');
            headingAvatar.css('width', 'auto');
            headingAvatar.css('height', 'auto');
        }
    }
});
