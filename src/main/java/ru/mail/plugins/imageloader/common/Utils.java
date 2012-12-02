/*
 * Created by Dmitry Miroshnichenko 01-12-2012. Copyright Mail.Ru Group 2012.
 * All rights reserved.
 */
package ru.mail.plugins.imageloader.common;

import javax.servlet.http.HttpServletRequest;

/**
 * This class contains utility methods.
 */
public class Utils
{
    /**
     * Get base URL from request.
     */
    public static String getBaseUrl(HttpServletRequest req)
    {
        return (req.getScheme() + "://" + req.getServerName() + ":" + req.getServerPort() + req.getContextPath());
    }

    /**
     * Check string on not null and not empty.
     */
    public static boolean isValidStr(String str)
    {
        return (str != null && str.length() > 0);
    }

    /**
     * Private constructor.
     */
    private Utils() {}
}
