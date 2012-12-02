/*
 * Created by Dmitry Miroshnichenko 01-12-2012. Copyright Mail.Ru Group 2012.
 * All rights reserved.
 */
package ru.mail.plugins.imageloader.structures;

public class IssueTypeData
{
    private String id;

    private String name; 

    /**
     * Constructor.
     */
    public IssueTypeData(String id, String name)
    {
        this.id = id;
        this.name = name;
    }

    public String getId()
    {
        return id;
    }

    public String getName()
    {
        return name;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    @Override
    public String toString()
    {
        return "IssueTypeData[id=" + id + ", name=" + name + "]";
    }
}
