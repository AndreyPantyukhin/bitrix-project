{"version":3,"file":"registry.bundle.map.js","names":["this","BX","Messenger","Embedding","exports","im_oldChatEmbedding_lib_utils","ui_fonts_opensans","ui_vue3","im_oldChatEmbedding_const","AvatarSize","XS","S","M","L","XL","XXL","Avatar","name","props","dialogId","type","String","default","size","withAvatarLetters","Boolean","withStatus","withCounter","withBirthday","withTyping","computed","dialog","$store","getters","user","isUser","DialogType","isBot","bot","isActiveInvitation","recentItem","invitation","isActive","chatAvatarStyle","backgroundImage","avatar","avatarText","open","chat","includes","Utils","text","getFirstLetters","chatTypeIconClasses","classes","push","userStatusIcon","id","currentUserId","status","isSomeoneTyping","Object","keys","writingList","length","formattedCounter","counter","isChatMuted","isMuted","muteList","find","element","showBirthdays","RecentSettings","showBirthday","state","application","common","userId","template","DialogSpecialType","extranet","network","support24","TitleIcons","absent","birthday","ChatTitle","withMute","botType","isSelfChat","dialogSpecialType","isExtranet","support24Notifier","support24Question","isNetwork","leftIcon","isBirthday","isAbsent","color","tooltipText","loc","isDarkTheme","options","darkTheme","methods","phraseCode","$Bitrix","Loc","getMessage","RecentLoadingState","compactMode","itemsToShow","Number","isThreeLineVersion","Math","random","ComponentLegacy","Lib","Vue3","Const"],"sources":["registry.bundle.js"],"mappings":"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"}