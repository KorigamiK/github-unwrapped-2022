import React from 'react';
import { Composition, Folder, Still } from 'remotion';
import { COMP_NAME, DURATION, OG_COMP_NAME } from '../src/config';
import { getTimesOfDay } from '../src/get-times-of-day';
import { AvatarFrame } from './AvatarFrame';
import { AvgCommits } from './AvgCommits';
import { BestCommits } from './BestCommits';
import { Commit } from './Commit';
import { EndCard } from './EndCard';
import { Flashcard } from './Flashcard';
import { GithubComp } from './GithubComp';
import { GithubPromo } from './GithubPromo';
import { Logo } from './Icons/Logo';
import { IssuesOpened } from './IssuesOpened';
import { Clojure } from './Languages/Clojure';
import { CMake } from './Languages/CMake';
import { CoffeeScript } from './Languages/CoffeeScript';
import { CPlusPlus } from './Languages/CPlusPlus';
import { Css } from './Languages/Css';
import { Flutter } from './Languages/Flutter';
import { GraphQL } from './Languages/GraphQl';
import { Haskell } from './Languages/Haskell';
import { Html } from './Languages/HTML';
import { Java } from './Languages/Java';
import { JavaScript } from './Languages/JavaScript';
import { Kotlin } from './Languages/Kotlin';
import { Lua } from './Languages/Lua';
import { Php } from './Languages/Php';
import { PowerShell } from './Languages/PowerShell';
import { Python } from './Languages/Python';
import { RLang } from './Languages/RLang';
import { Ruby } from './Languages/Ruby';
import { Rust } from './Languages/Rust';
import { Sass } from './Languages/Sass';
import { Scala } from './Languages/Scala';
import { Solidity } from './Languages/Solidity';
import { SQL } from './Languages/SQL';
import { Swift } from './Languages/Swift';
import { TypeScript } from './Languages/Typescript';
import { Vue } from './Languages/Vue';
import { LanguageToSocks } from './LanguageToSocks';
import { Loader } from './Loader';
import { Main } from './Main';
import { mapResponseToStats } from './map-response-to-stats';
import { OG } from './og/Og';
import { Snow } from './Snow';
import { SockComp } from './SockComp';
import { Socks } from './Socks';
import { Teaser } from './Teaser';
import { blueTheme, goldenTheme, redTheme } from './theme';
import { Title } from './Title2022';
import { TitleCard } from './TitleCard';
import { TopWeekdays2022 } from './TopWeekdays';
import { TreeComp } from './TreeComp';
import { TreeGithub } from './TreeGithub';
import { Unwrap } from './Unwrap';
import { WallHanger } from './WallHanger';

// Uncomment to use the real data for preview
/*
import { backendResponseToBackendStats, getAll } from '../src/get-all';
import { getRandomGithubToken } from '../src/get-random-github-token';
import { Commit as ICommit } from './frontend-stats';
import { getALotOfGithubCommits } from './github-api';
import { BackendStats } from './map-response-to-stats';
*/

// Unomment to use the data from file for rendering
// Update the data to yours by pasting the data from the console while in preview mode
// /*
import { all } from './all'
import { commits } from './commits'
// */

// Customization options
// const USERNAME = 'KorigamiK'
const artificiallySubstituteLanguage = [{ from: 'CSS', to: 'TeX' }]
const artificiallyClosedIssues = 6
const artificiallyOpenIssues = 3


export const Root: React.FC = () => {

	// Uncomment to use the real data for preview
	/* 
	const [loading, setLoading] = React.useState(true);
	const [allLoading, setAllLoading] = React.useState(true);
	const [commits, setCommits] = React.useState<ICommit[]>([]);
	const [all, setAll] = React.useState<BackendStats>({} as unknown as BackendStats);

	React.useEffect(() => {
		if (!commits.length)
			getALotOfGithubCommits(USERNAME).then((commits) => {
				setCommits(commits);
				console.log(commits);
				setLoading(false);
			});

		if (!Object.keys(all).length)
			getAll(USERNAME, getRandomGithubToken()).then((all) => {
				const backendResponse = backendResponseToBackendStats(all)

				for (const { from, to } of artificiallySubstituteLanguage) {
					const idx = backendResponse.topLanguages?.findIndex(l => l.name === from)
					console.log(idx, from, to)
					if (idx !== undefined && idx !== -1)
						backendResponse.topLanguages![idx].name = to
				}

				backendResponse.issues.open = artificiallyOpenIssues
				backendResponse.issues.closed = artificiallyClosedIssues

				setAll(backendResponse);
				console.log(backendResponse);
				setAllLoading(false);
			}
			);
	}, []);
	*/

	// /*
	// Unomment to use saved data from file for rendering
	for (const { from, to } of artificiallySubstituteLanguage) {
		const idx = all.topLanguages?.findIndex(l => l.name === from)
		console.log(idx, from, to)
		if (idx !== undefined && idx !== -1)
			all.topLanguages![idx].name = to
	}

	all.issues.open = artificiallyOpenIssues
	all.issues.closed = artificiallyClosedIssues
	// */

	return (
		<>
			{
				// Uncomment to use real data for preview
				// loading || allLoading ? <div>loading...</div> :
				<>

					<Composition
						component={Main}
						durationInFrames={DURATION}
						fps={30}
						height={1080}
						width={1080}
						id={COMP_NAME}
						defaultProps={{
							type: 'landscape' as const,
							stats: mapResponseToStats(
								all,
								commits
							),
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={Main}
						durationInFrames={DURATION}
						fps={30}
						height={1080}
						width={1080}
						id={`${ COMP_NAME }-blue`}
						defaultProps={{
							type: 'landscape' as const,

							stats: mapResponseToStats(
								all,
								commits
							),
							theme: blueTheme,
						}}
					></Composition>
					<Composition
						component={Main}
						durationInFrames={DURATION}
						fps={30}
						height={1080}
						width={1080}
						id={`${ COMP_NAME }-gold`}
						defaultProps={{
							type: 'landscape' as const,
							stats: mapResponseToStats(
								all,
								commits
							),
							theme: goldenTheme,
						}}
					></Composition>
					<Composition
						component={GithubPromo}
						durationInFrames={600}
						fps={30}
						height={1080}
						width={1920}
						id={'github-promo'}
						defaultProps={{
							type: 'landscape' as const,
							stats: mapResponseToStats(
								all,
								commits
							),
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={GithubPromo}
						durationInFrames={600}
						fps={30}
						height={1920}
						width={1920}
						id={'github-promo-square'}
						defaultProps={{
							type: 'square' as const,
							stats: mapResponseToStats(
								all,
								commits
							),
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={Teaser}
						durationInFrames={600}
						fps={30}
						height={1920}
						width={1920}
						id={'github-teaser-square'}
						defaultProps={{
							type: 'square' as const,
							stats: mapResponseToStats(
								all,
								commits
							),
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={GithubPromo}
						durationInFrames={600}
						fps={30}
						height={1920}
						width={1080}
						id={'github-promo-portrait'}
						defaultProps={{
							type: 'portrait' as const,
							stats: mapResponseToStats(
								all,
								commits
							),
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={TitleCard}
						durationInFrames={300}
						fps={30}
						height={1080}
						width={1080}
						id="title-card"
						defaultProps={{
							theme: redTheme,
							bigTitle: '#GitHubUnwrapped',
							smallTitle: 'This is my ',
						}}
					></Composition>
					<Composition
						component={TopWeekdays2022}
						durationInFrames={300}
						fps={30}
						height={1080}
						width={1080}
						id="top-weekdays-2022"
						defaultProps={{
							noBackground: false,
							stats: mapResponseToStats(
								all,
								commits
							),
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={AvgCommits}
						durationInFrames={300}
						fps={30}
						height={1080}
						width={1080}
						id="commits"
						defaultProps={{
							theme: goldenTheme,
							noBackground: false,
							bestHours: getTimesOfDay(commits),
						}}
					></Composition>
					<Composition
						component={Snow}
						durationInFrames={1200}
						fps={30}
						height={1080}
						width={1080}
						id="snow"
						defaultProps={{
							windPushes: undefined,
						}}
					></Composition>
					<Composition
						component={Title}
						durationInFrames={300}
						fps={30}
						height={1080}
						width={1080}
						id="title"
						defaultProps={{
							theme: redTheme,
							noBackground: false,
							userStats: mapResponseToStats(
								all,
								commits
							),
						}}
					></Composition>
					<Still
						component={Flashcard}
						height={630}
						width={1200}
						id="flashcard"
					></Still>
					<Folder name="languages">
						<Composition
							component={TypeScript}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="typescript"
						></Composition>
						<Composition
							component={JavaScript}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="javascript"
						></Composition>
						<Composition
							component={Java}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="java"
						></Composition>
						<Composition
							component={Clojure}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="clojure"
						></Composition>
						<Composition
							component={CMake}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="cmake"
						></Composition>
						<Composition
							component={Vue}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="vue"
						></Composition>
						<Composition
							component={CoffeeScript}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="coffeescript"
						></Composition>
						<Composition
							component={Kotlin}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="kotlin"
						></Composition>
						<Composition
							component={CPlusPlus}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="cplusplus"
						></Composition>
						<Composition
							component={Solidity}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="solidity"
						></Composition>
						<Composition
							component={Flutter}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="flutter"
						></Composition>
						<Composition
							component={SQL}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="mysql"
						></Composition>
						<Composition
							component={Haskell}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="haskell"
						></Composition>
						<Composition
							component={Lua}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="lua"
						></Composition>
						<Composition
							component={Python}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="python"
						></Composition>
						<Composition
							component={PowerShell}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="powershell"
						></Composition>
						<Composition
							component={Ruby}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="ruby"
						></Composition>
						<Composition
							component={Html}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="html"
						></Composition>
						<Composition
							component={Scala}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="scala"
						></Composition>
						<Composition
							component={Php}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="php"
						></Composition>
						<Composition
							component={Swift}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="swift"
						></Composition>
						<Composition
							component={Css}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="css"
						></Composition>
						<Composition
							component={GraphQL}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="graphql"
						></Composition>
						<Composition
							component={RLang}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="r"
						></Composition>
						<Composition
							component={Rust}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="rust"
						></Composition>
						<Composition
							component={Sass}
							height={1080}
							width={1080}
							durationInFrames={50}
							fps={30}
							id="sass"
						></Composition>
					</Folder>
					<Composition
						component={IssuesOpened}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="NoIssues"
						defaultProps={{
							noBackground: false,
							issues: {
								closed: 0,
								open: 0,
							},
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={IssuesOpened}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="FewIssues"
						defaultProps={{
							noBackground: false,
							issues: {
								closed: 2,
								open: 2,
							},
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={IssuesOpened}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="IssuesDiv0"
						defaultProps={{
							noBackground: false,
							issues: {
								closed: 0,
								open: 1,
							},
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={IssuesOpened}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="AllClosed"
						defaultProps={{
							noBackground: false,
							issues: {
								closed: 6,
								open: 0,
							},
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={IssuesOpened}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="50Issues"
						defaultProps={{
							noBackground: false,
							issues: {
								closed: 54,
								open: 11,
							},
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={TreeComp}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="Tree"
					></Composition>
					<Composition
						component={Logo}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="Logo"
						defaultProps={{
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={GithubComp}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="Github"
					></Composition>
					<Composition
						component={TreeGithub}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="TreeGithub"
					></Composition>
					<Composition
						component={SockComp}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="SockComp"
					></Composition>
					<Composition
						component={Socks}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="Socks"
						defaultProps={{
							theme: redTheme,
							noBackground: false,
							topLanguages: [
								{
									color: 'red',
									name: 'CSS',
								},
								{
									color: 'red',
									name: 'Bash',
								},
								{
									color: 'red',
									name: 'Bash',
								},
							],
						}}
					></Composition>
					<Composition
						component={Socks}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="SocksTwo"
						defaultProps={{
							theme: redTheme,
							noBackground: false,
							topLanguages: [
								{
									color: 'red',
									name: 'CSS',
								},
								{
									color: 'red',
									name: 'Bash',
								},
							],
						}}
					></Composition>
					<Composition
						component={OG}
						height={630}
						width={1200}
						durationInFrames={1}
						fps={30}
						id={OG_COMP_NAME}
						defaultProps={{
							theme: redTheme,
							userStats: mapResponseToStats(
								all,
								commits
							),
							isGeneric: false,
						}}
					/>
					<Composition
						component={OG}
						height={630}
						width={1200}
						durationInFrames={1}
						fps={30}
						id="OGGeneric"
						defaultProps={{
							theme: redTheme,
							userStats: mapResponseToStats(
								all,
								commits
							),
							isGeneric: true,
						}}
					/>
					<Composition
						component={Socks}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="SocksOne"
						defaultProps={{
							theme: redTheme,
							noBackground: false,
							topLanguages: [
								{
									color: 'red',
									name: 'CSS',
								},
							],
						}}
					></Composition>
					<Composition
						component={WallHanger}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="WallHanger"
					></Composition>
					<Composition
						component={AvatarFrame}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="AvatarFrame"
					></Composition>
					<Composition
						component={TitleCard}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="TitleCard"
					></Composition>
					<Composition
						component={Unwrap}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="Unwrap"
					></Composition>
					<Composition
						component={Commit}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="Commit"
						defaultProps={{
							message: 'fix wrong type',
							index: 0,
							repository: 'remotion/remotion-dev',
							theme: redTheme,
						}}
					></Composition>
					<Composition
						component={BestCommits}
						height={1080}
						width={1080}
						durationInFrames={250}
						fps={30}
						id="BestCommits"
						defaultProps={{
							stats: mapResponseToStats(
								all,
								commits
							),
							theme: redTheme,
							noBackground: false,
						}}
					></Composition>
					<Composition
						component={Loader}
						height={1080}
						width={1080}
						durationInFrames={65}
						fps={30}
						id="Loader"
					></Composition>
					<Composition
						component={LanguageToSocks}
						height={1080}
						width={1080}
						durationInFrames={180}
						fps={30}
						id="TopLanguages"
						defaultProps={{
							theme: redTheme,
							noBackground: true,
							topLanguages: [
								{
									color: 'red',
									name: 'CSS',
								},
								{
									color: 'red',
									name: 'Bash',
								},
								{
									color: 'red',
									name: 'Bash',
								},
							],
						}}
					></Composition>
					<Composition
						component={EndCard}
						height={1080}
						width={1080}
						durationInFrames={180}
						fps={30}
						id="EndCard"
						defaultProps={{
							theme: redTheme,
							noBackground: true,
						}}
					></Composition>
				</>
			}
		</>

	);
};
