/*
 * Created by Dmitry Miroshnichenko 01-12-2012. Copyright Mail.Ru Group 2012.
 * All rights reserved.
 */
package ru.mail.plugins.imageloader.webworks;

import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import ru.mail.plugins.imageloader.structures.IssueTypeData;
import ru.mail.plugins.imageloader.structures.ProjectData;
import com.atlassian.crowd.embedded.api.User;
import com.atlassian.jira.component.ComponentAccessor;
import com.atlassian.jira.issue.issuetype.IssueType;
import com.atlassian.jira.project.Project;
import com.atlassian.jira.security.Permissions;
import com.atlassian.jira.web.action.JiraWebActionSupport;
import com.atlassian.sal.api.ApplicationProperties;

/**
 * Administration plugin page action.
 */
public class MailRuIssueImageLoaderAdminAction
    extends JiraWebActionSupport
{
    /**
     * Unique ID.
     */
    private static final long serialVersionUID = 4694501111472424261L;

    /**
     * Application properties.
     */
    private final ApplicationProperties applicationProperties;

    /**
     * Project and issues.
     */
    private LinkedHashMap<ProjectData, ArrayList<IssueTypeData>> projIssueTypes;

    /**
     * Constructor.
     */
    public MailRuIssueImageLoaderAdminAction(
        ApplicationProperties applicationProperties)
    {
        this.applicationProperties = applicationProperties;
        this.projIssueTypes = new LinkedHashMap<ProjectData, ArrayList<IssueTypeData>>();
    }

    @Override
    public String doDefault()
    throws Exception
    {
        List<Project> projects = ComponentAccessor.getProjectManager().getProjectObjects();
        for (Project project : projects)
        {
            ArrayList<IssueTypeData> issueTypesIds = new ArrayList<IssueTypeData>();
            Collection<IssueType> issueTypes = project.getIssueTypes();
            for (IssueType issueType : issueTypes)
            {
                IssueTypeData issueTypeData = new IssueTypeData(issueType.getId(), issueType.getName());
                issueTypesIds.add(issueTypeData);
            }
            ProjectData projectData = new ProjectData(project.getKey(), project.getName());
            projIssueTypes.put(projectData, issueTypesIds);
        }

        return SUCCESS;
    }

    /**
     * Get base URL.
     */
    public String getBaseUrl()
    {
        return applicationProperties.getBaseUrl();
    }

    /**
     * Project issues data.
     */
    public LinkedHashMap<ProjectData, ArrayList<IssueTypeData>> getProjIssueTypes()
    {
        return projIssueTypes;
    }

    /**
     * Check administrator permissions.
     */
    public boolean hasAdminPermission()
    {
        User user = getLoggedInUser();
        if (user == null)
        {
            return false;
        }

        if (!ComponentAccessor.getPermissionManager().hasPermission(Permissions.ADMINISTER, user))
        {
            return false;
        }

        return true;
    }
}
