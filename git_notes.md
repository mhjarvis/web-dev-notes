<h1 align=center>----- Git -----</h1>

## Git Clone
A clone allows you to download a repository and check out the most recent commit on the default branch of the respository.

    git clone <remote-repository> <local-path>
    git clone <repository>                                //abreviated version if you are in folder
    
## Git Status
Git status tells you about the state of your workspace and how it compares to what is currently checked out. If workspace and what is checked out is identical, then it is clean. Otherwise it is dirty.

    git status

<img src="https://github.com/mhjarvis/web-dev-notes/blob/main/images/file_states.png" width="800" align=center>

## Git Log
Git log allows you to look at the history of a repository.

    git log                               //prints sha, author, date, and commit comments
    git log --oneline                     //prints partial sha and commit comments
    git log --oneline --decorate          //annotate the commits with visible pointers
    git log -2                            //prints the last 2 commits
    
<h1 align=center>----- Building Commits -----</h1>

## Staging Commits
This is the list of files that are staged to go into the next commit. Files can be in a few different states from the perspective of Git:

* **Unmodified** - the file is identical in the workspace and in the currently checked-out commit in the repository.
* **Modified** - The file is present in both workspace and repository, but is different.
* **Staged** - The file is in the workspace, current commit, and stage. Can be different in all three locations.
* **Untracked** - The file is in the workspace, but not in the current commit.

