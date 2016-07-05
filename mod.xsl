<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/root" name="oxm-scroll-nav">
    <!-- className 'J_OXMod' required  -->
    <div class="J_OXMod oxmod-oxm-scroll-nav" ox-mod="oxm-scroll-nav">
        <nav class="nav J_nav">
            <xsl:for-each select="data/tags/i">
                <em data-id="{id}">
                    <xsl:value-of select="text" />
                </em>
            </xsl:for-each>
        </nav>
      </div>
    </xsl:template>

</xsl:stylesheet>
