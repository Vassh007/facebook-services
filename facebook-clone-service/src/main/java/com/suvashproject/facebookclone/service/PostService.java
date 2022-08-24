package com.suvashproject.facebookclone.service;

import com.suvashproject.facebookclone.model.Post;
import org.springframework.web.multipart.MultipartFile;




import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}