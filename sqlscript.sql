USE [master]
GO
/****** Object:  Database [psDB]    Script Date: 08/08/2019 01:47:39 ******/
CREATE DATABASE [psDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'psDB', FILENAME = N'C:\hack\SQL\DATA\psData' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'psDB_log', FILENAME = N'C:\hack\SQL\LOG\psLog' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [psDB] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [psDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [psDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [psDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [psDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [psDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [psDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [psDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [psDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [psDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [psDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [psDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [psDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [psDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [psDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [psDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [psDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [psDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [psDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [psDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [psDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [psDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [psDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [psDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [psDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [psDB] SET  MULTI_USER 
GO
ALTER DATABASE [psDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [psDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [psDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [psDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [psDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [psDB] SET QUERY_STORE = OFF
GO
USE [psDB]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [psDB]
GO
/****** Object:  Table [dbo].[record]    Script Date: 08/08/2019 01:47:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[record](
	[record_ID] [int] IDENTITY(1,1) NOT NULL,
	[channel_ID] [int] NOT NULL,
	[start_time] [datetime2](3) NOT NULL,
	[end_time] [datetime2](3) NULL,
PRIMARY KEY CLUSTERED 
(
	[record_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[recordTag]    Script Date: 08/08/2019 01:47:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[recordTag](
	[record_tag_ID] [int] IDENTITY(1,1) NOT NULL,
	[record_ID] [int] NOT NULL,
	[algo_par1] [float] NOT NULL,
	[user_par1] [float] NOT NULL,
	[algo_par2] [float] NOT NULL,
	[user_par2] [float] NOT NULL,
	[algo_par3] [float] NOT NULL,
	[user_par3] [float] NOT NULL,
	[algo_par4] [float] NOT NULL,
	[user_par4] [float] NOT NULL,
	[algo_par5] [float] NOT NULL,
	[user_par5] [float] NOT NULL,
	[algo_par6] [float] NOT NULL,
	[user_par6] [float] NOT NULL,
	[algo_par7] [float] NOT NULL,
	[user_par7] [float] NOT NULL,
	[algo_par8] [float] NOT NULL,
	[user_par8] [float] NOT NULL,
	[algo_par9] [float] NOT NULL,
	[user_par9] [float] NOT NULL,
	[algo_par10] [float] NOT NULL,
	[user_par10] [float] NOT NULL,
	[time_stamp] [datetime2](3) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[record_tag_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[tag_in_channel]    Script Date: 08/08/2019 01:47:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[tag_in_channel]
AS
SELECT dbo.recordTag.record_tag_ID, dbo.record.channel_ID, dbo.recordTag.record_ID, dbo.recordTag.algo_par1, dbo.recordTag.user_par1, dbo.recordTag.algo_par2, dbo.recordTag.user_par2, dbo.recordTag.algo_par3, 
                  dbo.recordTag.user_par3, dbo.recordTag.algo_par4, dbo.recordTag.user_par4, dbo.recordTag.algo_par5, dbo.recordTag.user_par5, dbo.recordTag.algo_par6, dbo.recordTag.user_par6, dbo.recordTag.algo_par7, 
                  dbo.recordTag.user_par7, dbo.recordTag.algo_par8, dbo.recordTag.user_par8, dbo.recordTag.algo_par9, dbo.recordTag.user_par9, dbo.recordTag.algo_par10, dbo.recordTag.user_par10, dbo.recordTag.time_stamp
FROM     dbo.recordTag INNER JOIN
                  dbo.record ON dbo.recordTag.record_ID = dbo.record.record_ID
GO
/****** Object:  Table [dbo].[channel]    Script Date: 08/08/2019 01:47:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[channel](
	[channel_ID] [int] NOT NULL,
	[name] [varchar](50) NOT NULL,
	[path] [varchar](50) NOT NULL,
 CONSTRAINT [PK_channel] PRIMARY KEY CLUSTERED 
(
	[channel_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[recordFile]    Script Date: 08/08/2019 01:47:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[recordFile](
	[record_file_ID] [int] IDENTITY(1,1) NOT NULL,
	[record_ID] [int] NOT NULL,
	[start_time] [datetime2](3) NOT NULL,
	[end_time] [datetime2](3) NULL,
PRIMARY KEY CLUSTERED 
(
	[record_file_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[channel] ([channel_ID], [name], [path]) VALUES (1, N'channel1', N'c:\ps\1')
INSERT [dbo].[channel] ([channel_ID], [name], [path]) VALUES (2, N'channel2', N'c:\ps\2')
INSERT [dbo].[channel] ([channel_ID], [name], [path]) VALUES (3, N'channel3', N'c:\ps\3')
INSERT [dbo].[channel] ([channel_ID], [name], [path]) VALUES (4, N'channel4', N'c:\ps\4')
INSERT [dbo].[channel] ([channel_ID], [name], [path]) VALUES (5, N'channel5', N'c:\ps\5')
SET IDENTITY_INSERT [dbo].[record] ON 

INSERT [dbo].[record] ([record_ID], [channel_ID], [start_time], [end_time]) VALUES (9, 1, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2), CAST(N'2019-08-08T19:40:21.1220000' AS DateTime2))
INSERT [dbo].[record] ([record_ID], [channel_ID], [start_time], [end_time]) VALUES (10, 2, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2), NULL)
INSERT [dbo].[record] ([record_ID], [channel_ID], [start_time], [end_time]) VALUES (34, 3, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2), NULL)
SET IDENTITY_INSERT [dbo].[record] OFF
SET IDENTITY_INSERT [dbo].[recordFile] ON 

INSERT [dbo].[recordFile] ([record_file_ID], [record_ID], [start_time], [end_time]) VALUES (2, 9, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2), NULL)
INSERT [dbo].[recordFile] ([record_file_ID], [record_ID], [start_time], [end_time]) VALUES (4, 9, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2), NULL)
INSERT [dbo].[recordFile] ([record_file_ID], [record_ID], [start_time], [end_time]) VALUES (5, 9, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2), NULL)
INSERT [dbo].[recordFile] ([record_file_ID], [record_ID], [start_time], [end_time]) VALUES (7, 9, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2), NULL)
INSERT [dbo].[recordFile] ([record_file_ID], [record_ID], [start_time], [end_time]) VALUES (8, 9, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2), NULL)
INSERT [dbo].[recordFile] ([record_file_ID], [record_ID], [start_time], [end_time]) VALUES (9, 9, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2), CAST(N'2019-08-08T19:40:21.1220000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[recordFile] OFF
SET IDENTITY_INSERT [dbo].[recordTag] ON 

INSERT [dbo].[recordTag] ([record_tag_ID], [record_ID], [algo_par1], [user_par1], [algo_par2], [user_par2], [algo_par3], [user_par3], [algo_par4], [user_par4], [algo_par5], [user_par5], [algo_par6], [user_par6], [algo_par7], [user_par7], [algo_par8], [user_par8], [algo_par9], [user_par9], [algo_par10], [user_par10], [time_stamp]) VALUES (1, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2))
INSERT [dbo].[recordTag] ([record_tag_ID], [record_ID], [algo_par1], [user_par1], [algo_par2], [user_par2], [algo_par3], [user_par3], [algo_par4], [user_par4], [algo_par5], [user_par5], [algo_par6], [user_par6], [algo_par7], [user_par7], [algo_par8], [user_par8], [algo_par9], [user_par9], [algo_par10], [user_par10], [time_stamp]) VALUES (2, 34, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2))
INSERT [dbo].[recordTag] ([record_tag_ID], [record_ID], [algo_par1], [user_par1], [algo_par2], [user_par2], [algo_par3], [user_par3], [algo_par4], [user_par4], [algo_par5], [user_par5], [algo_par6], [user_par6], [algo_par7], [user_par7], [algo_par8], [user_par8], [algo_par9], [user_par9], [algo_par10], [user_par10], [time_stamp]) VALUES (3, 34, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, CAST(N'2019-08-07T19:40:21.1220000' AS DateTime2))
INSERT [dbo].[recordTag] ([record_tag_ID], [record_ID], [algo_par1], [user_par1], [algo_par2], [user_par2], [algo_par3], [user_par3], [algo_par4], [user_par4], [algo_par5], [user_par5], [algo_par6], [user_par6], [algo_par7], [user_par7], [algo_par8], [user_par8], [algo_par9], [user_par9], [algo_par10], [user_par10], [time_stamp]) VALUES (4, 34, 1, 1, 2, 2, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, CAST(N'2019-08-09T19:40:21.1220000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[recordTag] OFF
ALTER TABLE [dbo].[record]  WITH CHECK ADD  CONSTRAINT [FK_record_channel1] FOREIGN KEY([channel_ID])
REFERENCES [dbo].[channel] ([channel_ID])
GO
ALTER TABLE [dbo].[record] CHECK CONSTRAINT [FK_record_channel1]
GO
ALTER TABLE [dbo].[recordFile]  WITH CHECK ADD  CONSTRAINT [FK_recordFile_record] FOREIGN KEY([record_ID])
REFERENCES [dbo].[record] ([record_ID])
GO
ALTER TABLE [dbo].[recordFile] CHECK CONSTRAINT [FK_recordFile_record]
GO
ALTER TABLE [dbo].[recordTag]  WITH CHECK ADD  CONSTRAINT [FK_recordTag_record] FOREIGN KEY([record_ID])
REFERENCES [dbo].[record] ([record_ID])
GO
ALTER TABLE [dbo].[recordTag] CHECK CONSTRAINT [FK_recordTag_record]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "recordTag"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 242
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "record"
            Begin Extent = 
               Top = 7
               Left = 532
               Bottom = 170
               Right = 726
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'tag_in_channel'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'tag_in_channel'
GO
USE [master]
GO
ALTER DATABASE [psDB] SET  READ_WRITE 
GO
