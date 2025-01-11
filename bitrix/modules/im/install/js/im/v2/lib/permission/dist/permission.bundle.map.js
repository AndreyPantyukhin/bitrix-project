{"version":3,"file":"permission.bundle.map.js","names":["this","BX","Messenger","v2","exports","main_core","im_v2_application_core","im_v2_lib_logger","im_v2_const","MinimalRoleForAction","ChatActionType","readMessage","UserRole","member","setReaction","openMessageMenu","openAvatarMenu","openSidebarMenu","subscribeToComments","openComments","guest","openSidebar","DEFAULT_TYPE","_instance","babelHelpers","classPrivateFieldLooseKey","_rolePermissions","_chatTypePermissions","_actionGroups","_actionGroupsDefaultRoles","_init","_canPerformActionByRole","_canPerformActionByChatType","_canPerformActionByChatSettings","_getGroupByAction","_prepareChatTypePermissions","_checkMinimalRole","_getDialog","PermissionManager","static","classPrivateFieldLooseBase","getInstance","constructor","Object","defineProperty","value","_getDialog2","_checkMinimalRole2","_prepareChatTypePermissions2","_getGroupByAction2","_canPerformActionByChatSettings2","_canPerformActionByChatType2","_canPerformActionByRole2","_init2","writable","permissions","Core","getApplicationData","Logger","warn","canPerformAction","actionType","dialogId","getDefaultRolesForActionGroups","chatType","rawPermissions","byChatType","actionGroups","actionGroupsDefaults","role","userRole","Type","isUndefined","minimalRole","rawActionType","_babelHelpers$classPr","dialog","owner","chatOwner","type","kick","leave","isOwner","getUserId","leaveOwner","chatPermissions","ChatType","user","actionGroup","minimalRoleForGroup","searchResult","entries","find","_","groupActions","includes","groupName","permissionsByChatType","preparedPermissions","SERVER_USER_CHAT_TYPE","roleToCheck","none","roleWeights","values","forEach","index","getStore","getters","Lib","Application","Const"],"sources":["permission.bundle.js"],"mappings":"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"}