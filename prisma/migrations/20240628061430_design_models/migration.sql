/*
  Warnings:

  - You are about to drop the column `isPublished` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Post` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `desc` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Post] ALTER COLUMN [desc] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Post] DROP COLUMN [isPublished],
[name],
[number];
ALTER TABLE [dbo].[Post] ADD [createdAt] DATETIME2 NOT NULL CONSTRAINT [Post_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
[img] NVARCHAR(1000),
[updatedAt] DATETIME2 NOT NULL,
[userId] NVARCHAR(1000) NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [avatar] NVARCHAR(1000),
    [cover] NVARCHAR(1000),
    [name] NVARCHAR(1000),
    [surname] NVARCHAR(1000),
    [description] NVARCHAR(1000),
    [city] NVARCHAR(1000),
    [school] NVARCHAR(1000),
    [work] NVARCHAR(1000),
    [website] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_username_key] UNIQUE NONCLUSTERED ([username])
);

-- CreateTable
CREATE TABLE [dbo].[Comment] (
    [id] INT NOT NULL IDENTITY(1,1),
    [desc] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Comment_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [postId] INT NOT NULL,
    CONSTRAINT [Comment_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Like] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Like_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [userId] NVARCHAR(1000) NOT NULL,
    [postId] INT,
    [commentId] INT,
    CONSTRAINT [Like_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Follower] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Follower_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [followerId] NVARCHAR(1000) NOT NULL,
    [followingId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Follower_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[FollowRequest] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [FollowRequest_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [senderId] NVARCHAR(1000) NOT NULL,
    [receiverId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [FollowRequest_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [FollowRequest_senderId_receiverId_key] UNIQUE NONCLUSTERED ([senderId],[receiverId])
);

-- CreateTable
CREATE TABLE [dbo].[Block] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Block_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [blockerId] NVARCHAR(1000) NOT NULL,
    [blockedId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Block_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Block_blockerId_blockedId_key] UNIQUE NONCLUSTERED ([blockerId],[blockedId])
);

-- CreateTable
CREATE TABLE [dbo].[Story] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Story_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [expiresAt] DATETIME2 NOT NULL,
    [img] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Story_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Story_userId_key] UNIQUE NONCLUSTERED ([userId])
);

-- AddForeignKey
ALTER TABLE [dbo].[Post] ADD CONSTRAINT [Post_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [Comment_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [Comment_postId_fkey] FOREIGN KEY ([postId]) REFERENCES [dbo].[Post]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Like] ADD CONSTRAINT [Like_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Like] ADD CONSTRAINT [Like_postId_fkey] FOREIGN KEY ([postId]) REFERENCES [dbo].[Post]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Like] ADD CONSTRAINT [Like_commentId_fkey] FOREIGN KEY ([commentId]) REFERENCES [dbo].[Comment]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Follower] ADD CONSTRAINT [Follower_followerId_fkey] FOREIGN KEY ([followerId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Follower] ADD CONSTRAINT [Follower_followingId_fkey] FOREIGN KEY ([followingId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FollowRequest] ADD CONSTRAINT [FollowRequest_senderId_fkey] FOREIGN KEY ([senderId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FollowRequest] ADD CONSTRAINT [FollowRequest_receiverId_fkey] FOREIGN KEY ([receiverId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Block] ADD CONSTRAINT [Block_blockerId_fkey] FOREIGN KEY ([blockerId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Block] ADD CONSTRAINT [Block_blockedId_fkey] FOREIGN KEY ([blockedId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Story] ADD CONSTRAINT [Story_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
