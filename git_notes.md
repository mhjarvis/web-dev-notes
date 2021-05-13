<h1 align=center>----- Git -----</h1>

## Git Clone
A clone allows you to download a repository and check out the most recent commit on the default branch of the respository.

    git clone <remote-repository> <local-path>
    git clone <repository>                                //abreviated version if you are in folder
    
## Git Status
Git status tells you about the state of your workspace and how it compares to what is currently checked out. If workspace and what is checked out is identical, then it is clean. Otherwise it is dirty.

    git status

<p align=center><img src="https://github.com/mhjarvis/web-dev-notes/blob/main/images/file_states.png" width="800"></p>

## Git Log
Git log allows you to look at the history of a repository.

    git log                               //prints sha, author, date, and commit comments
    git log --oneline                     //prints partial sha and commit comments
    git log --oneline --decorate          //annotate the commits with visible pointers
    git log -2                            //prints the last 2 commits
    
<h1 align=center>----- Building Commits -----</h1>

## Staging Commit
This is the list of files that are staged to go into the next commit. Files can be in a few different states from the perspective of Git:

* **Unmodified** - the file is identical in the workspace and in the currently checked-out commit in the repository.
* **Modified** - The file is present in both workspace and repository, but is different.
* **Staged** - The file is in the workspace, current commit, and stage. Can be different in all three locations.
* **Untracked** - The file is in the workspace, but not in the current commit.
     
A basic commit works as follows:

    git commit -m "some message about the commit"                       //basic commit
    git commit                                                          //will open text editor to allow you to enter comment
    
#### Gitmojis
Gitmojis can be added to commit messages:

    :art                    //improving structure / format of the code
    :zap                    //improving performance
    :fire                   //removing code or files
    :bug                    //fixing a bug

## Git Amend
Amending a commit creates a new commit and updates pointers. It leaves a dangling commit that will be garbage collected after some time.

    git commit --amend -m "new comment message"
    
## Clean Commits with .gitignore
.gitignore allows us to put paths into a file where all contained files will be ignored when we stage items for committing.

    echo "*.exe" > .gitignore               //add all *.exe files to gitignore to prevent uploading via git
    echo "t.txt" > .gitignore               //this will prevent the file 't.txt' from being added to your commit
    
Prefixing with a "!" will include that file.

    *.png                                   //ignore all .png images
    !images/*.png                           //include all .png files in the images folder
    

