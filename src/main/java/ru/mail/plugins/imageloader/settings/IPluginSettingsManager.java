/*
 * Created by Dmitry Miroshnichenko 01-12-2012. Copyright Mail.Ru Group 2012.
 * All rights reserved.
 */
package ru.mail.plugins.imageloader.settings;

/**
 * Plug-In data manager.
 */
public interface IPluginSettingsManager
{
    public String getIssueTypeImage(String projectId, String issueTypeName);

    public Object getValue(final String key);

    public void setIssueTypeImage(String imageName, String projectId, String issueTypeName);

    public void setValue(final String key, final String value);
}
