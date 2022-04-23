## Description
This plugin allows you to display your Listing Grid widget like Tabs and even filter it with the JetSmartFilters plugin

## Config example
You need to install the JetEngine (and JetSmartFilters plugin in case you want to filter it) before installing this addon.
You should create the Listing Item with next conditions:
1) 2 sections https://prnt.sc/NmeQlg5xK_Cz
2) the 1st section need to have the classname jet-tab https://prnt.sc/DV2KNVZ_OEUX and it should have the widget with the dynamic tab name https://prnt.sc/3QrE7XzB88pE
3) it is better to setup the second section with min height https://prnt.sc/gy1pBsRV-RtE , also you need to add the classname to it jet-content https://prnt.sc/gAnkNwixm5qh and please add all the needed content of the tab.
Then create the page, where you want to add the Listing Grid widget looks like tabs. Add the section to this page with the min height https://prnt.sc/3aM-2eF0Y0dR , then add the inner section with 2 columns: the first one is empty https://prnt.sc/xb2aFS9ojXFq and with the id column-tab and the second one with the Listing Grid widget https://prnt.sc/U73ZDUyXptT7 with the Columns number 1
If you want to filter the widget, please add the filters in the separate section https://prnt.sc/tA_FuiFXTNTO and choose the JetEngine provider/
If you want to customize the tab-switchers - you should do it manually.
On the front-end looks that way https://www.loom.com/share/aa88b3b4036d433dadb5b4db85834d93
