import { GitHubUser } from './github-user';


export interface GitHubUsersResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GitHubUser[];
}