import confige from "../confige/confige";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  Databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(confige.appwriteUrl)
      .setProject(confige.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async creatPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.Databases.creatDocument(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        slug,
        {
          status,
          title,
          userId,
          content,
          featuredImage,
        }
      );
    } catch (error) {
      console.log("CreatPost:", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        slug,
        {
          content,
          title,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Update Problem:", error);
    }
  }

  async deletePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.Databases.deleteDocument(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        slug,
        {
          status,
          title,
          userId,
          content,
          featuredImage,
        }
      );
    } catch (error) {
      console.log("DeletePost:", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Getpost:", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Getposts :", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        confige.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("UploadFile:", error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(confige.appwriteBucketId, fileId);
    } catch (error) {
      console.log("DeleteFile:", error);
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(confige.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
