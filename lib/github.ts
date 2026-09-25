import {Octokit} from "octokit";import {env} from "./env";
const octokit=new Octokit({auth:process.env.GITHUB_TOKEN});
export async function getRepoSummary(){const r=await octokit.rest.repos.get({owner:env.githubOwner,repo:env.githubRepo});return {name:r.data.full_name,defaultBranch:r.data.default_branch,private:r.data.private};}
export async function createPullRequest(branch:string,title:string,body:string){const r=await octokit.rest.pulls.create({owner:env.githubOwner,repo:env.githubRepo,title,head:branch,base:"main",body});return {number:r.data.number,url:r.data.html_url};}