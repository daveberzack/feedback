const tracks = [
    { id:1, title:"Beethoven's Fifth Gold Digger", artist:"Water Murphy x Kanye West"},
    { id:2, title:"Celeshake", artist:"Kool & the Gang x Yin Yang Twins"},  
    { id:3, title:"Planetary Firework", artist:"Katy Perry x My Chemical Romance"},  
    { id:4, title:"Gucci Gucci Girl Power", artist:"Misc"},  
    { id:5, title:"Whip My Hair Real Good", artist:"Willow Smith x Devo"},  
    { id:6, title:"Next Episode in the Thrift Shop", artist:"Snoop Dogg x Macklemore"},  
    { id:7, title:"Survivor", artist:"Destiny's Child"},  
    { id:8, title:"Blonde Du Roll Out", artist:"Blonde Du Role x Ludacris"},  
    { id:9, title:"Sledgehammer", artist:"Peter Gabriel"},  
    { id:10, title:"Truth Hurts One More Time", artist:"Lizzo x Britney Spears"},  
    { id:11, title:"Family Affair", artist:"Mary J. Blige"},  
    { id:12, title:"Here Comes the Hotstepper", artist:"Ini Kamoze"},  
    { id:13, title:"Last Night a DJ Saved my Life", artist:"Discotron"},  
    { id:14, title:"Should Be Addiction", artist:"Bee Gees x Pablo Enrique"},  
    { id:15, title:"Without Me", artist:"Eminem"},  
    { id:16, title:"California Skank", artist:"Tupac x Fatboy Slim"},  
    { id:17, title:"Otherside", artist:""},  
    { id:18, title:"Edge of Seventeen", artist:"Stevie Nicks"},  
    { id:19, title:"Funky Touch", artist:""},  
    { id:20, title:"Chicks For Free", artist:""},  
    { id:21, title:"I Need You Tonight", artist:"INXS"},  
    { id:22, title:"Downtown Beverly Hills Cheerleaders", artist:"OMI x Macklemore x"},  
    { id:23, title:"LA Woman", artist:"The Doors"},  
    { id:24, title:"Shut Up and Dance Kuaga", artist:"Walk the Moon vs Pierce Fulton"},  
    { id:25, title:"Enjoy the Silence", artist:"Depeche Mode"},  
    { id:26, title:"What's Golden", artist:"Jurassic 5"},  
    { id:27, title:"Stayin' Low", artist:"Bee Gees x Lil Jon"},  
    { id:28, title:"Give it to Me x Sun Goes Down", artist:""},  
    { id:29, title:"Good Time Gangnam Style", artist:"Misc"},  
    { id:30, title:"For What it's Worth", artist:"Buffalo Springfield"},  
    { id:31, title:"Watch Out for This", artist:"Major Lazer"},  
    { id:32, title:"Get Get Down", artist:"Paul Johnson x Rudeejay"},  
    { id:33, title:"Forever Young", artist:"Alphaville"},  
    { id:34, title:"Holiday", artist:"Madonna"},  
    { id:35, title:"I want it That Groove", artist:"Backstreet Boys x Dario Valli"},  
    { id:36, title:"Dance Dreams", artist:"Lady Gaga x The Eurythmics"},  
    { id:37, title:"Queen of Atlanta", artist:"Queen x Ludacris x Ray Charles x Outkast"},  
    { id:38, title:"Never Gonna Thank U, Next", artist:"Rick Astley x Ariana Grande"},  
    { id:39, title:"Domino Feels so Close", artist:"Jessie J x Calvin Harris"},  
    { id:40, title:"", artist:""},  
    { id:41, title:"", artist:""},  
    { id:42, title:"", artist:""},  
    { id:43, title:"", artist:""},  
    { id:44, title:"", artist:""},  
    { id:45, title:"", artist:""},  
    { id:46, title:"", artist:""},  
    { id:47, title:"", artist:""},  
    { id:48, title:"", artist:""},  
    { id:49, title:"", artist:""},  
    { id:50, title:"", artist:""},  
    { id:51, title:"", artist:""},  
    { id:52, title:"", artist:""},  
    { id:53, title:"", artist:""},  
    { id:54, title:"", artist:""},  
    { id:55, title:"", artist:""},  
    { id:56, title:"", artist:""},  
    { id:57, title:"", artist:""},  
    { id:58, title:"", artist:""},  
    { id:59, title:"", artist:""},  
    { id:60, title:"", artist:""},  
    { id:61, title:"", artist:""},  
    { id:62, title:"", artist:""},  
    { id:63, title:"", artist:""},  
    { id:64, title:"", artist:""},  
    { id:65, title:"", artist:""},  
    { id:66, title:"", artist:""},  
    { id:67, title:"", artist:""},  
    { id:68, title:"", artist:""},  
    { id:69, title:"", artist:""},  
    { id:70, title:"", artist:""},  
    { id:71, title:"", artist:""},  
    { id:72, title:"", artist:""},  
    { id:73, title:"", artist:""},  
    { id:74, title:"", artist:""},  
    { id:75, title:"", artist:""},  
    { id:76, title:"", artist:""},  
    { id:77, title:"", artist:""},  
    { id:78, title:"", artist:""},  
    { id:79, title:"", artist:""},  
    { id:80, title:"", artist:""},  
    { id:81, title:"", artist:""},  
    { id:82, title:"", artist:""},  
    { id:83, title:"", artist:""},  
    { id:84, title:"", artist:""},  
    { id:85, title:"", artist:""},  
    { id:86, title:"", artist:""},  
    { id:87, title:"", artist:""},  
    { id:88, title:"", artist:""},  
    { id:89, title:"", artist:""},  
    { id:90, title:"", artist:""},  
    { id:91, title:"", artist:""},  
    { id:92, title:"", artist:""},  
    { id:93, title:"", artist:""},  
    { id:94, title:"", artist:""},  
    { id:95, title:"", artist:""},  
    { id:96, title:"", artist:""},  
    { id:97, title:"", artist:""},  
    { id:98, title:"", artist:""},  
    { id:99, title:"", artist:""},  
    
    { id:100, title:"", artist:""},  
    { id:101, title:"", artist:""},  
    { id:102, title:"", artist:""},  
    { id:103, title:"", artist:""},  
    { id:104, title:"", artist:""},  
    { id:105, title:"", artist:""},  
    { id:106, title:"", artist:""},  
    { id:107, title:"", artist:""},  
    { id:108, title:"", artist:""},  
    { id:109, title:"", artist:""},  
    { id:110, title:"", artist:""},  
    { id:111, title:"", artist:""},  
    { id:112, title:"", artist:""},  
    { id:113, title:"", artist:""},  
    { id:114, title:"", artist:""},  
    { id:115, title:"", artist:""},  
    { id:116, title:"", artist:""},  
    { id:117, title:"", artist:""},  
    { id:118, title:"", artist:""},  
    { id:119, title:"", artist:""},  
    { id:120, title:"", artist:""},  
    { id:121, title:"", artist:""},  
    { id:122, title:"", artist:""},  
    { id:123, title:"", artist:""},  
    { id:124, title:"", artist:""},  
    { id:125, title:"", artist:""},  
    { id:126, title:"", artist:""},  
    { id:127, title:"", artist:""},  
    { id:128, title:"", artist:""},  
    { id:129, title:"", artist:""},  
    { id:130, title:"", artist:""},  
    { id:131, title:"", artist:""},  
    { id:132, title:"", artist:""},  
    { id:133, title:"", artist:""},  
    { id:134, title:"", artist:""},  
    { id:135, title:"", artist:""},  
    { id:136, title:"", artist:""},  
    { id:137, title:"", artist:""},  
    { id:138, title:"", artist:""},  
    { id:139, title:"", artist:""},  
    { id:140, title:"", artist:""},  
    { id:141, title:"", artist:""},  
    { id:142, title:"", artist:""},  
    { id:143, title:"", artist:""},  
    { id:144, title:"", artist:""},  
    { id:145, title:"", artist:""},  
    { id:146, title:"", artist:""},  
    { id:147, title:"", artist:""},  
    { id:148, title:"", artist:""},  
    { id:149, title:"", artist:""},  
    { id:150, title:"", artist:""},  
    { id:151, title:"", artist:""},  
    { id:152, title:"", artist:""},  
    { id:153, title:"", artist:""},  
    { id:154, title:"", artist:""},  
    { id:155, title:"", artist:""},  
    { id:156, title:"", artist:""},  
    { id:157, title:"", artist:""},  
    { id:158, title:"", artist:""},  
    { id:159, title:"", artist:""},  
    { id:160, title:"", artist:""},  
    { id:161, title:"", artist:""},  
    { id:162, title:"", artist:""},  
    { id:163, title:"", artist:""},  
    { id:164, title:"", artist:""},  
    { id:165, title:"", artist:""},  
    { id:166, title:"", artist:""},  
    { id:167, title:"", artist:""},  
    { id:168, title:"", artist:""},  
    { id:169, title:"", artist:""},  
    { id:170, title:"", artist:""},  
    { id:171, title:"", artist:""},  
    { id:172, title:"", artist:""},  
    { id:173, title:"", artist:""},  
    { id:174, title:"", artist:""},  
    { id:175, title:"", artist:""},  
    { id:176, title:"", artist:""},  
    { id:177, title:"", artist:""},  
    { id:178, title:"", artist:""},  
    { id:179, title:"", artist:""},  
    { id:180, title:"", artist:""},  
    { id:181, title:"", artist:""},  
    { id:182, title:"", artist:""},  
    { id:183, title:"", artist:""},  
    { id:184, title:"", artist:""},  
    { id:185, title:"", artist:""},  
    { id:186, title:"", artist:""},  
    { id:187, title:"", artist:""},  
    { id:188, title:"", artist:""},  
    { id:189, title:"", artist:""},  
    { id:190, title:"", artist:""},  
    { id:191, title:"", artist:""},  
    { id:192, title:"", artist:""},  
    { id:193, title:"", artist:""},  
    { id:194, title:"", artist:""},  
    { id:195, title:"", artist:""},  
    { id:196, title:"", artist:""},  
    { id:197, title:"", artist:""},  
    { id:198, title:"", artist:""},  
    { id:199, title:"", artist:""},  
    
    { id:200, title:"", artist:""},  
    { id:201, title:"", artist:""},  
    { id:202, title:"", artist:""},  
    { id:203, title:"", artist:""},  
    { id:204, title:"", artist:""},  
    { id:205, title:"", artist:""},  
    { id:206, title:"", artist:""},  
    { id:207, title:"", artist:""},  
    { id:208, title:"", artist:""},  
    { id:209, title:"", artist:""}, 
    { id:210, title:"", artist:""},  
    { id:211, title:"", artist:""},  
    { id:212, title:"", artist:""},  
    { id:213, title:"", artist:""},  
    { id:214, title:"", artist:""},  
    { id:215, title:"", artist:""},  
    { id:216, title:"", artist:""},  
    { id:217, title:"", artist:""},  
    { id:218, title:"", artist:""},  
    { id:219, title:"", artist:""},  
    { id:220, title:"", artist:""},  
    { id:221, title:"", artist:""},  
    { id:222, title:"", artist:""},  
    { id:223, title:"", artist:""},  
    { id:224, title:"", artist:""},  
    { id:225, title:"", artist:""},  
    { id:226, title:"", artist:""},  
    { id:227, title:"", artist:""},  
    { id:228, title:"", artist:""},  
    { id:229, title:"", artist:""},  
    { id:230, title:"", artist:""},  
    { id:231, title:"", artist:""},  
    { id:232, title:"", artist:""},  
    { id:233, title:"", artist:""},  
    { id:234, title:"", artist:""},  
    { id:235, title:"", artist:""},  
    { id:236, title:"", artist:""},  
    { id:237, title:"", artist:""},  
    { id:238, title:"", artist:""},  
    { id:239, title:"", artist:""},  
    { id:240, title:"", artist:""},  
    { id:241, title:"", artist:""},  
    { id:242, title:"", artist:""},  
    { id:243, title:"", artist:""},  
    { id:244, title:"", artist:""},  
    { id:245, title:"", artist:""},  
    { id:246, title:"", artist:""},  
    { id:247, title:"", artist:""},  
    { id:248, title:"", artist:""},  
    { id:249, title:"", artist:""},  
    { id:250, title:"", artist:""},  
    { id:251, title:"", artist:""},  
    { id:252, title:"", artist:""},  
    { id:253, title:"", artist:""},  
    { id:254, title:"", artist:""},  
    { id:255, title:"", artist:""},  
    { id:256, title:"", artist:""},  
    { id:257, title:"", artist:""},  
    { id:258, title:"", artist:""},  
    { id:259, title:"", artist:""},  
    { id:260, title:"", artist:""},  
    { id:261, title:"", artist:""},  
    { id:262, title:"", artist:""},  
    { id:263, title:"", artist:""},  
    { id:264, title:"", artist:""},  
    { id:265, title:"", artist:""},  
    { id:266, title:"", artist:""},  
    { id:267, title:"", artist:""},  
    { id:268, title:"", artist:""},  
    { id:269, title:"", artist:""},  
    { id:270, title:"", artist:""},  
    { id:271, title:"", artist:""},  
    { id:272, title:"", artist:""},  
    { id:273, title:"", artist:""},  
    { id:274, title:"", artist:""},  
    { id:275, title:"", artist:""},  
    { id:276, title:"", artist:""},  
    { id:277, title:"", artist:""},  
    { id:278, title:"", artist:""},  
    { id:279, title:"", artist:""},  
    { id:280, title:"", artist:""},  
    { id:281, title:"", artist:""},  
    { id:282, title:"", artist:""},  
    { id:283, title:"", artist:""},  
    { id:284, title:"", artist:""},  
    { id:285, title:"", artist:""},  
    { id:286, title:"", artist:""},  
    { id:287, title:"", artist:""},  
    { id:288, title:"", artist:""},  
    { id:289, title:"", artist:""},  
    { id:290, title:"", artist:""},  
    { id:291, title:"", artist:""},  
    { id:292, title:"", artist:""},  
    { id:293, title:"", artist:""},  
    { id:294, title:"", artist:""},  
    { id:295, title:"", artist:""},  
    { id:296, title:"", artist:""},  
    { id:297, title:"", artist:""},  
    { id:298, title:"", artist:""},  
    { id:299, title:"", artist:""},  
    
    { id:300, title:"", artist:""},  
    { id:301, title:"", artist:""},  
    { id:302, title:"", artist:""},  
    { id:303, title:"", artist:""},  
    { id:304, title:"", artist:""},  
    { id:305, title:"", artist:""},  
    { id:306, title:"", artist:""},  
    { id:307, title:"", artist:""},  
    { id:308, title:"", artist:""},  
    { id:309, title:"", artist:""},  
    { id:310, title:"", artist:""},  
    { id:311, title:"", artist:""},  
    { id:312, title:"", artist:""},  
    { id:313, title:"", artist:""},  
    { id:314, title:"", artist:""},  
    { id:315, title:"", artist:""},  
    { id:316, title:"", artist:""},  
    { id:317, title:"", artist:""},  
    { id:318, title:"", artist:""},  
    { id:319, title:"", artist:""},  
    { id:320, title:"", artist:""},  
    { id:321, title:"", artist:""},  
    { id:322, title:"", artist:""},  
    { id:323, title:"", artist:""},  
    { id:324, title:"", artist:""},  
    { id:325, title:"", artist:""},  
    { id:326, title:"", artist:""},  
    { id:327, title:"", artist:""},  
    { id:328, title:"", artist:""},  
    { id:329, title:"", artist:""},  
    { id:330, title:"", artist:""},  
    { id:331, title:"", artist:""},  
    { id:332, title:"", artist:""},  
    { id:333, title:"", artist:""},  
    { id:334, title:"", artist:""},  
    { id:335, title:"", artist:""},  
    { id:336, title:"", artist:""},  
    { id:337, title:"", artist:""},  
    { id:338, title:"", artist:""},  
    { id:339, title:"", artist:""},  
    { id:340, title:"", artist:""},  
    { id:341, title:"", artist:""},  
    { id:342, title:"", artist:""},  
    { id:343, title:"", artist:""},  
    { id:344, title:"", artist:""},  
    { id:345, title:"", artist:""},  
    { id:346, title:"", artist:""},  
    { id:347, title:"", artist:""},  
    { id:348, title:"", artist:""},  
    { id:349, title:"", artist:""},  
    { id:350, title:"", artist:""},  
    { id:351, title:"", artist:""},  
    { id:352, title:"", artist:""},  
    { id:353, title:"", artist:""},  
    { id:354, title:"", artist:""},  
    { id:355, title:"", artist:""},  
    { id:356, title:"", artist:""},  
    { id:357, title:"", artist:""},  
    { id:358, title:"", artist:""},  
    { id:359, title:"", artist:""},  
    { id:360, title:"", artist:""},  
    { id:361, title:"", artist:""},  
    { id:362, title:"", artist:""},  
    { id:363, title:"", artist:""},  
    { id:364, title:"", artist:""},  
    { id:365, title:"", artist:""},  
    { id:366, title:"", artist:""},  
    { id:367, title:"", artist:""},  
    { id:368, title:"", artist:""},  
    { id:369, title:"", artist:""},  
    { id:370, title:"", artist:""},  
    { id:371, title:"", artist:""},  
    { id:372, title:"", artist:""},  
    { id:373, title:"", artist:""},  
    { id:374, title:"", artist:""},  
    { id:375, title:"", artist:""},  
    { id:376, title:"", artist:""},  
    { id:377, title:"", artist:""},  
    { id:378, title:"", artist:""},  
    { id:379, title:"", artist:""},  
    { id:380, title:"", artist:""},  
    { id:381, title:"", artist:""},  
    { id:382, title:"", artist:""},  
    { id:383, title:"", artist:""},  
    { id:384, title:"", artist:""},  
    { id:385, title:"", artist:""},  
    { id:386, title:"", artist:""},  
    { id:387, title:"", artist:""},  
    { id:388, title:"", artist:""},  
    { id:389, title:"", artist:""},  
    { id:390, title:"", artist:""},  
    { id:391, title:"", artist:""},  
    { id:392, title:"", artist:""},  
    { id:393, title:"", artist:""},  
    { id:394, title:"", artist:""},  
    { id:395, title:"", artist:""},  
    { id:396, title:"", artist:""},  
    { id:397, title:"", artist:""},  
    { id:398, title:"", artist:""},  
    { id:399, title:"", artist:""},  
    
    { id:400, title:"", artist:""},  
    { id:401, title:"", artist:""},  
    { id:402, title:"", artist:""},  
    { id:403, title:"", artist:""},  
    { id:404, title:"", artist:""},  
    { id:405, title:"", artist:""},  
    { id:406, title:"", artist:""},  
    { id:407, title:"", artist:""},  
    { id:408, title:"", artist:""},  
    { id:409, title:"", artist:""},  
    { id:410, title:"", artist:""},  
    { id:411, title:"", artist:""},  
    { id:412, title:"", artist:""},  
    { id:413, title:"", artist:""},  
    { id:414, title:"", artist:""},  
    { id:415, title:"", artist:""},  
    { id:416, title:"", artist:""},  
    { id:417, title:"", artist:""},  
    { id:418, title:"", artist:""},  
    { id:419, title:"", artist:""},  
    { id:420, title:"", artist:""},  
    { id:421, title:"", artist:""},  
    { id:422, title:"", artist:""},  
    { id:423, title:"", artist:""},  
    { id:424, title:"", artist:""},  
    { id:425, title:"", artist:""},  
    { id:426, title:"", artist:""},  
    { id:427, title:"", artist:""},  
    { id:428, title:"", artist:""},  
    { id:429, title:"", artist:""},  
    { id:430, title:"", artist:""},  
    { id:431, title:"", artist:""},  
    { id:432, title:"", artist:""},  
    { id:433, title:"", artist:""},  
    { id:434, title:"", artist:""},  
    { id:435, title:"", artist:""},  
    { id:436, title:"", artist:""},  
    { id:437, title:"", artist:""},  
    { id:438, title:"", artist:""},  
    { id:439, title:"", artist:""},  
    { id:440, title:"", artist:""},  
    { id:441, title:"", artist:""},  
    { id:442, title:"", artist:""},  
    { id:443, title:"", artist:""},  
    { id:444, title:"", artist:""},  
    { id:445, title:"", artist:""},  
    { id:446, title:"", artist:""},  
    { id:447, title:"", artist:""},  
    { id:448, title:"", artist:""},  
    { id:449, title:"", artist:""},  
    { id:450, title:"", artist:""},  
    { id:451, title:"", artist:""},  
    { id:452, title:"", artist:""},  
    { id:453, title:"", artist:""},  
    { id:454, title:"", artist:""},  
    { id:455, title:"", artist:""},  
    { id:456, title:"", artist:""},  
    { id:457, title:"", artist:""},  
    { id:458, title:"", artist:""},  
    { id:459, title:"", artist:""},  
    { id:460, title:"", artist:""},  
    { id:461, title:"", artist:""},  
    { id:462, title:"", artist:""},  
    { id:463, title:"", artist:""},  
    { id:464, title:"", artist:""},  
    { id:465, title:"", artist:""},  
    { id:466, title:"", artist:""},  
    { id:467, title:"", artist:""},  
    { id:468, title:"", artist:""},  
    { id:469, title:"", artist:""},  
    { id:470, title:"", artist:""},  
    { id:471, title:"", artist:""},  
    { id:472, title:"", artist:""},  
    { id:473, title:"", artist:""},  
    { id:474, title:"", artist:""},  
    { id:475, title:"", artist:""},  
    { id:476, title:"", artist:""},  
    { id:477, title:"", artist:""},  
    { id:478, title:"", artist:""},  
    { id:479, title:"", artist:""},  
    { id:480, title:"", artist:""},  
    { id:481, title:"", artist:""},  
    { id:482, title:"", artist:""},  
    { id:483, title:"", artist:""},  
    { id:484, title:"", artist:""},  
    { id:485, title:"", artist:""},  
    { id:486, title:"", artist:""},  
    { id:487, title:"", artist:""},  
    { id:488, title:"", artist:""},  
    { id:489, title:"", artist:""},  
    { id:490, title:"", artist:""},  
    { id:491, title:"", artist:""},  
    { id:492, title:"", artist:""},  
    { id:493, title:"", artist:""},  
    { id:494, title:"", artist:""},  
    { id:495, title:"", artist:""},  
    { id:496, title:"", artist:""},  
    { id:497, title:"", artist:""},  
    { id:498, title:"", artist:""},  
    { id:499, title:"", artist:""},  
    
    { id:500, title:"", artist:""},  
    { id:501, title:"", artist:""},  
    { id:502, title:"", artist:""},  
    { id:503, title:"", artist:""},  
    { id:504, title:"", artist:""},  
    { id:505, title:"", artist:""},  
    { id:506, title:"", artist:""},  
    { id:507, title:"", artist:""},  
    { id:508, title:"", artist:""},  
    { id:509, title:"", artist:""},
    { id:510, title:"", artist:""},  
    { id:511, title:"", artist:""},  
    { id:512, title:"", artist:""},  
    { id:513, title:"", artist:""},  
    { id:514, title:"", artist:""},  
    { id:515, title:"", artist:""},  
    { id:516, title:"", artist:""},  
    { id:517, title:"", artist:""},  
    { id:518, title:"", artist:""},  
    { id:519, title:"", artist:""},  
    { id:520, title:"", artist:""},  
    { id:521, title:"", artist:""},  
    { id:522, title:"", artist:""},  
    { id:523, title:"", artist:""},  
    { id:524, title:"", artist:""},  
    { id:525, title:"", artist:""},  
    { id:526, title:"", artist:""},  
    { id:527, title:"", artist:""},  
    { id:528, title:"", artist:""},  
    { id:529, title:"", artist:""},  
    { id:530, title:"", artist:""},  
    { id:531, title:"", artist:""},  
    { id:532, title:"", artist:""},  
    { id:533, title:"", artist:""},  
    { id:534, title:"", artist:""},  
    { id:535, title:"", artist:""},  
    { id:536, title:"", artist:""},  
    { id:537, title:"", artist:""},  
    { id:538, title:"", artist:""},  
    { id:539, title:"", artist:""},  
    { id:540, title:"", artist:""},  
    { id:541, title:"", artist:""},  
    { id:542, title:"", artist:""},  
    { id:543, title:"", artist:""},  
    { id:544, title:"", artist:""},  
    { id:545, title:"", artist:""},  
    { id:546, title:"", artist:""},  
    { id:547, title:"", artist:""},  
    { id:548, title:"", artist:""},  
    { id:549, title:"", artist:""},  
    { id:550, title:"", artist:""},  
    { id:551, title:"", artist:""},  
    { id:552, title:"", artist:""},  
    { id:553, title:"", artist:""},  
    { id:554, title:"", artist:""},  
    { id:555, title:"", artist:""},  
    { id:556, title:"", artist:""},  
    { id:557, title:"", artist:""},  
    { id:558, title:"", artist:""},  
    { id:559, title:"", artist:""},  
    { id:560, title:"", artist:""},  
    { id:561, title:"", artist:""},  
    { id:562, title:"", artist:""},  
    { id:563, title:"", artist:""},  
    { id:564, title:"", artist:""},  
    { id:565, title:"", artist:""},  
    { id:566, title:"", artist:""},  
    { id:567, title:"", artist:""},  
    { id:568, title:"", artist:""},  
    { id:569, title:"", artist:""},  
    { id:570, title:"", artist:""},  
    { id:571, title:"", artist:""},  
    { id:572, title:"", artist:""},  
    { id:573, title:"", artist:""},  
    { id:574, title:"", artist:""},  
    { id:575, title:"", artist:""},  
    { id:576, title:"", artist:""},  
    { id:577, title:"", artist:""},  
    { id:578, title:"", artist:""},  
    { id:579, title:"", artist:""},  
    { id:580, title:"", artist:""},  
    { id:581, title:"", artist:""},  
    { id:582, title:"", artist:""},  
    { id:583, title:"", artist:""},  
    { id:584, title:"", artist:""},  
    { id:585, title:"", artist:""},  
    { id:586, title:"", artist:""},  
    { id:587, title:"", artist:""},  
    { id:588, title:"", artist:""},  
    { id:589, title:"", artist:""},  
    { id:590, title:"", artist:""},  
    { id:591, title:"", artist:""},  
    { id:592, title:"", artist:""},  
    { id:593, title:"", artist:""},  
    { id:594, title:"", artist:""},  
    { id:595, title:"", artist:""},  
    { id:596, title:"", artist:""},  
    { id:597, title:"", artist:""},  
    { id:598, title:"", artist:""},  
    { id:599, title:"", artist:""},  
    
    { id:600, title:"", artist:""},  
    { id:601, title:"", artist:""},  
    { id:602, title:"", artist:""},  
    { id:603, title:"", artist:""},  
    { id:604, title:"", artist:""},  
    { id:605, title:"", artist:""},  
    { id:606, title:"", artist:""},  
    { id:607, title:"", artist:""},  
    { id:608, title:"", artist:""},  
    { id:609, title:"", artist:""},  
    { id:610, title:"", artist:""},  
    { id:611, title:"", artist:""},  
    { id:612, title:"", artist:""},  
    { id:613, title:"", artist:""},  
    { id:614, title:"", artist:""},  
    { id:615, title:"", artist:""},  
    { id:616, title:"", artist:""},  
    { id:617, title:"", artist:""},  
    { id:618, title:"", artist:""},  
    { id:619, title:"", artist:""},  
    { id:620, title:"", artist:""},  
    { id:621, title:"", artist:""},  
    { id:622, title:"", artist:""},  
    { id:623, title:"", artist:""},  
    { id:624, title:"", artist:""},  
    { id:625, title:"", artist:""},  
    { id:626, title:"", artist:""},  
    { id:627, title:"", artist:""},  
    { id:628, title:"", artist:""},  
    { id:629, title:"", artist:""},  
    { id:630, title:"", artist:""},  
    { id:631, title:"", artist:""},  
    { id:632, title:"", artist:""},  
    { id:633, title:"", artist:""},  
    { id:634, title:"", artist:""},  
    { id:635, title:"", artist:""},  
    { id:636, title:"", artist:""},  
    { id:637, title:"", artist:""},  
    { id:638, title:"", artist:""},  
    { id:639, title:"", artist:""},  
    { id:640, title:"", artist:""},  
    { id:641, title:"", artist:""},  
    { id:642, title:"", artist:""},  
    { id:643, title:"", artist:""},  
    { id:644, title:"", artist:""},  
    { id:645, title:"", artist:""},  
    { id:646, title:"", artist:""},  
    { id:647, title:"", artist:""},  
    { id:648, title:"", artist:""},  
    { id:649, title:"", artist:""},  
    { id:650, title:"", artist:""},  
    { id:651, title:"", artist:""},  
    { id:652, title:"", artist:""},  
    { id:653, title:"", artist:""},  
    { id:654, title:"", artist:""},  
    { id:655, title:"", artist:""},  
    { id:656, title:"", artist:""},  
    { id:657, title:"", artist:""},  
    { id:658, title:"", artist:""},  
    { id:659, title:"", artist:""},  
    { id:660, title:"", artist:""},  
    { id:661, title:"", artist:""},  
    { id:662, title:"", artist:""},  
    { id:663, title:"", artist:""},  
    { id:664, title:"", artist:""},  
    { id:665, title:"", artist:""},  
    { id:666, title:"", artist:""},  
    { id:667, title:"", artist:""},  
    { id:668, title:"", artist:""},  
    { id:669, title:"", artist:""},  
    { id:670, title:"", artist:""},  
    { id:671, title:"", artist:""},  
    { id:672, title:"", artist:""},  
    { id:673, title:"", artist:""},  
    { id:674, title:"", artist:""},  
    { id:675, title:"", artist:""},  
    { id:676, title:"", artist:""},  
    { id:677, title:"", artist:""},  
    { id:678, title:"", artist:""},  
    { id:679, title:"", artist:""},  
    { id:680, title:"", artist:""},  
    { id:681, title:"", artist:""},  
    { id:682, title:"", artist:""},  
    { id:683, title:"", artist:""},  
    { id:684, title:"", artist:""},  
    { id:685, title:"", artist:""},  
    { id:686, title:"", artist:""},  
    { id:687, title:"", artist:""},  
    { id:688, title:"", artist:""},  
    { id:689, title:"", artist:""},  
    { id:690, title:"", artist:""},  
    { id:691, title:"", artist:""},  
    { id:692, title:"", artist:""},  
    { id:693, title:"", artist:""},  
    { id:694, title:"", artist:""},  
    { id:695, title:"", artist:""},  
    { id:696, title:"", artist:""},  
    { id:697, title:"", artist:""},  
    { id:698, title:"", artist:""},  
    { id:699, title:"", artist:""},  
    
    { id:700, title:"", artist:""},  
    { id:701, title:"", artist:""},  
    { id:702, title:"", artist:""},  
    { id:703, title:"", artist:""},  
    { id:704, title:"", artist:""},  
    { id:705, title:"", artist:""},  
    { id:706, title:"", artist:""},  
    { id:707, title:"", artist:""},  
    { id:708, title:"", artist:""},  
    { id:709, title:"", artist:""},
    { id:710, title:"", artist:""},  
    { id:711, title:"", artist:""},  
    { id:712, title:"", artist:""},  
    { id:713, title:"", artist:""},  
    { id:714, title:"", artist:""},  
    { id:715, title:"", artist:""},  
    { id:716, title:"", artist:""},  
    { id:717, title:"", artist:""},  
    { id:718, title:"", artist:""},  
    { id:719, title:"", artist:""},  
    { id:720, title:"", artist:""},  
    { id:721, title:"", artist:""},  
    { id:722, title:"", artist:""},  
    { id:723, title:"", artist:""},  
    { id:724, title:"", artist:""},  
    { id:725, title:"", artist:""},  
    { id:726, title:"", artist:""},  
    { id:727, title:"", artist:""},  
    { id:728, title:"", artist:""},  
    { id:729, title:"", artist:""},  
    { id:730, title:"", artist:""},  
    { id:731, title:"", artist:""},  
    { id:732, title:"", artist:""},  
    { id:733, title:"", artist:""},  
    { id:734, title:"", artist:""},  
    { id:735, title:"", artist:""},  
    { id:736, title:"", artist:""},  
    { id:737, title:"", artist:""},  
    { id:738, title:"", artist:""},  
    { id:739, title:"", artist:""},  
    { id:740, title:"", artist:""},  
    { id:741, title:"", artist:""},  
    { id:742, title:"", artist:""},  
    { id:743, title:"", artist:""},  
    { id:744, title:"", artist:""},  
    { id:745, title:"", artist:""},  
    { id:746, title:"", artist:""},  
    { id:747, title:"", artist:""},  
    { id:748, title:"", artist:""},  
    { id:749, title:"", artist:""},  
    { id:750, title:"", artist:""},  
    { id:751, title:"", artist:""},  
    { id:752, title:"", artist:""},  
    { id:753, title:"", artist:""},  
    { id:754, title:"", artist:""},  
    { id:755, title:"", artist:""},  
    { id:756, title:"", artist:""},  
    { id:757, title:"", artist:""},  
    { id:758, title:"", artist:""},  
    { id:759, title:"", artist:""},  
    { id:760, title:"", artist:""},  
    { id:761, title:"", artist:""},  
    { id:762, title:"", artist:""},  
    { id:763, title:"", artist:""},  
    { id:764, title:"", artist:""},  
    { id:765, title:"", artist:""},  
    { id:766, title:"", artist:""},  
    { id:767, title:"", artist:""},  
    { id:768, title:"", artist:""},  
    { id:769, title:"", artist:""},  
    { id:770, title:"", artist:""},  
    { id:771, title:"", artist:""},  
    { id:772, title:"", artist:""},  
    { id:773, title:"", artist:""},  
    { id:774, title:"", artist:""},  
    { id:775, title:"", artist:""},  
    { id:776, title:"", artist:""},  
    { id:777, title:"", artist:""},  
    { id:778, title:"", artist:""},  
    { id:779, title:"", artist:""},  
    { id:780, title:"", artist:""},  
    { id:781, title:"", artist:""},  
    { id:782, title:"", artist:""},  
    { id:783, title:"", artist:""},  
    { id:784, title:"", artist:""},  
    { id:785, title:"", artist:""},  
    { id:786, title:"", artist:""},  
    { id:787, title:"", artist:""},  
    { id:788, title:"", artist:""},  
    { id:789, title:"", artist:""},  
    { id:790, title:"", artist:""},  
    { id:791, title:"", artist:""},  
    { id:792, title:"", artist:""},  
    { id:793, title:"", artist:""},  
    { id:794, title:"", artist:""},  
    { id:795, title:"", artist:""},  
    { id:796, title:"", artist:""},  
    { id:797, title:"", artist:""},  
    { id:798, title:"", artist:""},  
    { id:799, title:"", artist:""},  
     
    { id:800, title:"", artist:""},  
    { id:801, title:"", artist:""},  
    { id:802, title:"", artist:""},  
    { id:803, title:"", artist:""},  
    { id:804, title:"", artist:""},  
    { id:805, title:"", artist:""},  
    { id:806, title:"", artist:""},  
    { id:807, title:"", artist:""},  
    { id:808, title:"", artist:""},  
    { id:809, title:"", artist:""},
    { id:810, title:"", artist:""},  
    { id:811, title:"", artist:""},  
    { id:812, title:"", artist:""},  
    { id:813, title:"", artist:""},  
    { id:814, title:"", artist:""},  
    { id:815, title:"", artist:""},  
    { id:816, title:"", artist:""},  
    { id:817, title:"", artist:""},  
    { id:818, title:"", artist:""},  
    { id:819, title:"", artist:""},  
    { id:820, title:"", artist:""},  
    { id:821, title:"", artist:""},  
    { id:822, title:"", artist:""},  
    { id:823, title:"", artist:""},  
    { id:824, title:"", artist:""},  
    { id:825, title:"", artist:""},  
    { id:826, title:"", artist:""},  
    { id:827, title:"", artist:""},  
    { id:828, title:"", artist:""},  
    { id:829, title:"", artist:""},  
    { id:830, title:"", artist:""},  
    { id:831, title:"", artist:""},  
    { id:832, title:"", artist:""},  
    { id:833, title:"", artist:""},  
    { id:834, title:"", artist:""},  
    { id:835, title:"", artist:""},  
    { id:836, title:"", artist:""},  
    { id:837, title:"", artist:""},  
    { id:838, title:"", artist:""},  
    { id:839, title:"", artist:""},  
    { id:840, title:"", artist:""},  
    { id:841, title:"", artist:""},  
    { id:842, title:"", artist:""},  
    { id:843, title:"", artist:""},  
    { id:844, title:"", artist:""},  
    { id:845, title:"", artist:""},  
    { id:846, title:"", artist:""},  
    { id:847, title:"", artist:""},  
    { id:848, title:"", artist:""},  
    { id:849, title:"", artist:""},  
    { id:850, title:"", artist:""},  
    { id:851, title:"", artist:""},  
    { id:852, title:"", artist:""},  
    { id:853, title:"", artist:""},  
    { id:854, title:"", artist:""},  
    { id:855, title:"", artist:""},  
    { id:856, title:"", artist:""},  
    { id:857, title:"", artist:""},  
    { id:858, title:"", artist:""},  
    { id:859, title:"", artist:""},  
    { id:860, title:"", artist:""},  
    { id:861, title:"", artist:""},  
    { id:862, title:"", artist:""},  
    { id:863, title:"", artist:""},  
    { id:864, title:"", artist:""},  
    { id:865, title:"", artist:""},  
    { id:866, title:"", artist:""},  
    { id:867, title:"", artist:""},  
    { id:868, title:"", artist:""},  
    { id:869, title:"", artist:""},  
    { id:870, title:"", artist:""},  
    { id:871, title:"", artist:""},  
    { id:872, title:"", artist:""},  
    { id:873, title:"", artist:""},  
    { id:874, title:"", artist:""},  
    { id:875, title:"", artist:""},  
    { id:876, title:"", artist:""},  
    { id:877, title:"", artist:""},  
    { id:878, title:"", artist:""},  
    { id:879, title:"", artist:""},  
    { id:880, title:"", artist:""},  
    { id:881, title:"", artist:""},  
    { id:882, title:"", artist:""},  
    { id:883, title:"", artist:""},  
    { id:884, title:"", artist:""},  
    { id:885, title:"", artist:""},  
    { id:886, title:"", artist:""},  
    { id:887, title:"", artist:""},  
    { id:888, title:"", artist:""},  
    { id:889, title:"", artist:""},  
    { id:890, title:"", artist:""},  
    { id:891, title:"", artist:""},  
    { id:892, title:"", artist:""},  
    { id:893, title:"", artist:""},  
    { id:894, title:"", artist:""},  
    { id:895, title:"", artist:""},  
    { id:896, title:"", artist:""},  
    { id:897, title:"", artist:""},  
    { id:898, title:"", artist:""},  
    { id:899, title:"", artist:""},  
     
    { id:900, title:"", artist:""},  
    { id:901, title:"", artist:""},  
    { id:902, title:"", artist:""},  
    { id:903, title:"", artist:""},  
    { id:904, title:"", artist:""},  
    { id:905, title:"", artist:""},  
    { id:906, title:"", artist:""},  
    { id:907, title:"", artist:""},  
    { id:908, title:"", artist:""},  
    { id:909, title:"", artist:""},
    { id:910, title:"", artist:""},  
    { id:911, title:"", artist:""},  
    { id:912, title:"", artist:""},  
    { id:913, title:"", artist:""},  
    { id:914, title:"", artist:""},  
    { id:915, title:"", artist:""},  
    { id:916, title:"", artist:""},  
    { id:917, title:"", artist:""},  
    { id:918, title:"", artist:""},  
    { id:919, title:"", artist:""},  
    { id:920, title:"", artist:""},  
    { id:921, title:"", artist:""},  
    { id:922, title:"", artist:""},  
    { id:923, title:"", artist:""},  
    { id:924, title:"", artist:""},  
    { id:925, title:"", artist:""},  
    { id:926, title:"", artist:""},  
    { id:927, title:"", artist:""},  
    { id:928, title:"", artist:""},  
    { id:929, title:"", artist:""},  
    { id:930, title:"", artist:""},  
    { id:931, title:"", artist:""},  
    { id:932, title:"", artist:""},  
    { id:933, title:"", artist:""},  
    { id:934, title:"", artist:""},  
    { id:935, title:"", artist:""},  
    { id:936, title:"", artist:""},  
    { id:937, title:"", artist:""},  
    { id:938, title:"", artist:""},  
    { id:939, title:"", artist:""},  
    { id:940, title:"", artist:""},  
    { id:941, title:"", artist:""},  
    { id:942, title:"", artist:""},  
    { id:943, title:"", artist:""},  
    { id:944, title:"", artist:""},  
    { id:945, title:"", artist:""},  
    { id:946, title:"", artist:""},  
    { id:947, title:"", artist:""},  
    { id:948, title:"", artist:""},  
    { id:949, title:"", artist:""},  
    { id:950, title:"", artist:""},  
    { id:951, title:"", artist:""},  
    { id:952, title:"", artist:""},  
    { id:953, title:"", artist:""},  
    { id:954, title:"", artist:""},  
    { id:955, title:"", artist:""},  
    { id:956, title:"", artist:""},  
    { id:957, title:"", artist:""},  
    { id:958, title:"", artist:""},  
    { id:959, title:"", artist:""},  
    { id:960, title:"", artist:""},  
    { id:961, title:"", artist:""},  
    { id:962, title:"", artist:""},  
    { id:963, title:"", artist:""},  
    { id:964, title:"", artist:""},  
    { id:965, title:"", artist:""},  
    { id:966, title:"", artist:""},  
    { id:967, title:"", artist:""},  
    { id:968, title:"", artist:""},  
    { id:969, title:"", artist:""},  
    { id:970, title:"", artist:""},  
    { id:971, title:"", artist:""},  
    { id:972, title:"", artist:""},  
    { id:973, title:"", artist:""},  
    { id:974, title:"", artist:""},  
    { id:975, title:"", artist:""},  
    { id:976, title:"", artist:""},  
    { id:977, title:"", artist:""},  
    { id:978, title:"", artist:""},  
    { id:979, title:"", artist:""},  
    { id:980, title:"", artist:""},  
    { id:981, title:"", artist:""},  
    { id:982, title:"", artist:""},  
    { id:983, title:"", artist:""},  
    { id:984, title:"", artist:""},  
    { id:985, title:"", artist:""},  
    { id:986, title:"", artist:""},  
    { id:987, title:"", artist:""},  
    { id:988, title:"", artist:""},  
    { id:989, title:"", artist:""},  
    { id:990, title:"", artist:""},  
    { id:991, title:"", artist:""},  
    { id:992, title:"", artist:""},  
    { id:993, title:"", artist:""},  
    { id:994, title:"", artist:""},  
    { id:995, title:"", artist:""},  
    { id:996, title:"", artist:""},  
    { id:997, title:"", artist:""},  
    { id:998, title:"", artist:""},  
    { id:999, title:"", artist:""},  
]


export const getChoice = (trackId1, trackId2) => {
    let track1 = {};
    let track2 = {};
    tracks.forEach(element => {
        if (element.id==trackId1) track1 = element;
        if (element.id==trackId2) track2 = element;
    });
    const output = [ track1, track2 ]
    return output;
}
